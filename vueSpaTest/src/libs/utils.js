const utils = {}
export default utils;

utils.alert = (function(doc) {
	let cssOverlay = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:20150824;background-color:rgba(0,0,0,0.2);',
		cssCon = 'position: absolute;padding:5px;background-color: rgba(123,123,123,0.3);top:50%;left: 50%;border-radius: 5px;-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear',
		cssP = 'padding:5px 10px;line-height: 20px;max-width: 250px;color:#fff;font-size:14px;font-family: "Microsoft YaHei";background-color: #ED9A19;border-radius: 2px';


	let lc = {
		tips: function(text, timer, cb) {
			clearTimeout(this.t);
			this.oPrev && doc.body.removeChild(this.oPrev);
			this.generateHTML(text);
			this.show();
			var duration = typeof timer === 'number' ? timer : 1000;
			this.cb = typeof cb === 'function' ? cb : typeof timer === 'function' ? timer : null;
			this.hide(duration);
		},
		generateHTML: function(text) {
			this.oP = document.createElement("p");
			this.oCon = document.createElement("div");
			this.oTip = document.createElement("div");
			this.setCss(this.oP, cssP);
			this.setCss(this.oCon, cssCon);
			this.setCss(this.oTip, cssOverlay);
			this.oP.innerHTML = text;
			this.oCon.appendChild(this.oP);
			this.oTip.appendChild(this.oCon);
		},
		show: function() {
			doc.body.appendChild(this.oTip);
			var h = this.oCon.offsetHeight;
			var w = this.oCon.offsetWidth;
			this.oCon.style.marginLeft = -w / 2 + "px";
			this.oCon.style.marginTop = -h / 2 + "px";
			this.oCon.style.left = '50%';
			this.oCon.style.top = '50%';
			this.oPrev = this.oTip;
		},
		hide: function(timer) {
			var _this = this;
			this.t = setTimeout(function() {
				_this.oCon.style.opacity = '0';
				setTimeout(function() {
					doc.body.removeChild(_this.oTip);
					_this.oPrev = null;
					_this.cb && _this.cb();
				}, 200);
			}, timer);
		},
		setCss: function(o, csstext) {
			o.style.cssText = csstext;
		}
	};
	return function(text, timer, cb) {
		lc.tips.call(lc, text, timer, cb);
	};
})(document);

utils.formatDate = (date, format) => {
	date = new Date(date);
	var map = {
		"M": date.getMonth() + 1, //月份 
		"d": date.getDate(), //日 
		"h": date.getHours(), //小时 
		"m": date.getMinutes(), //分 
		"s": date.getSeconds(), //秒 
		"q": Math.floor((date.getMonth() + 3) / 3), //季度 
		"S": date.getMilliseconds() //毫秒 
	};
	format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
		var v = map[t];
		if (v !== undefined) {
			if (all.length > 1) {
				v = '0' + v;
				v = v.substr(v.length - 2);
			}
			return v;
		} else if (t === 'y') {
			return (date.getFullYear() + '').substr(4 - all.length);
		}
		return all;
	});
	return format;
}

let logKey = ['username', 'email', 'token'];
utils.storeLogon = (rememb, data) => {
	if (rememb) {
		logKey.forEach(function(k) {
			delete sessionStorage[k];
			data[k] && (localStorage[k] = JSON.stringify(data[k]));
		})
	} else {
		logKey.forEach(function(k) {
			delete localStorage[k];
			data[k] && (sessionStorage[k] = JSON.stringify(data[k]));
		})
	}
}

utils.removeLogon = () => {
	logKey.forEach(function(k) {
		delete localStorage[k];
		delete sessionStorage[k];
	})
}

utils.getStore = (name) => {
	var tokenKey = 'token';
	var token = sessionStorage[tokenKey] || localStorage[tokenKey];
	var value = '';
	if (name == tokenKey) {
		try {
			value = JSON.parse(token);
		} catch (e) {}
		return value;
	}
	if (token) {
		try {
			value = JSON.parse(sessionStorage[name] || localStorage[name]);
		} catch (e) {}
		return value;
	} else {
		utils.removeLogon();
	}
}

utils.getBasicAuth = () => {
	let token = utils.getStore('token') || '';
	return 'Basic ' + token;
}