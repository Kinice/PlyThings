import utils from './libs/utils.js'

export default function(router) {
    router.map({
        '/index': {
            name: 'index',
            component: function(resolve) {
                require(['./views/index.vue'], resolve);
            }
        },
        '*': {
            component: function(resolve) {
                require(['./views/404.vue'], resolve);
            }
        },
        'login': {
            name: 'login',
            component: function(resolve) {
                require(['./views/login.vue'], resolve);
            }
        },
        '/demo': {
            name: 'demo',
            component: function(resolve) {
                require(['./views/demo.vue'], resolve);
            }
        }
    });
    router.redirect({
        '/': '/index',
    });

    //路由校验
    router.beforeEach(transition => {
        //验证token，通过则保留，否则清除
        let auth = transition.to.auth,
            redirect = transition.to.path,
            pageSign = transition.to.pageSign,
            roles = transition.to.roles,
            token = utils.getStore('token');
        if (pageSign) {
            if (token) {
                transition.redirect('/');
            } else {
                transition.next();
            }
            return;
        }
        if (auth) {
            if (token) {
                if (judgePermission(roles)) {
                    transition.next();
                } else {
                    transition.redirect('/');
                }
            } else {
                transition.redirect('/login?redirect=' + redirect);
            }
        } else {
            transition.next();
        }
    });
}

//判断角色访问权限，角色前面带'-'为排除，多角色用户系统用
function judgePermission(roles) {
    if (!roles || !roles.length) return true;

    var permitRoles = [],
        deniedRoles = [];
    roles.forEach(function(role) {
        if (~role.indexOf('-')) {
            deniedRoles.push(role.substring(1))
        } else {
            permitRoles.push(role)
        }
    });

    //只要在允许白名单就通过
    for (let i = 0, len = permitRoles.length; i < len; i++) {
        if (utils.isRole(dict.role[permitRoles[i]])) {
            return true;
        }
    }

    //只要出现在黑名单就拒绝通过
    var deny = false
    if (deniedRoles.length === 0) return deny
    for (let i = 0, len = deniedRoles.length; i < len; i++) {
        if (utils.isRole(dict.role[deniedRoles[i]])) {
            deny = true
            break;
        }
    }
    return !deny;
}