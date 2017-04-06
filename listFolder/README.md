# List Folder 小工具

## 简介

listFolder会把指定目录的文件结构写到一个txt文件中。类似这样：

element-spa-sample.txt:

```
|-- README.md
|-- build/
    |-- build.js
    |-- check-versions.js
    |-- dev-client.js
    |-- dev-server.js
    |-- utils.js
    |-- webpack.base.conf.js
    |-- webpack.dev.conf.js
    |-- webpack.prod.conf.js
|-- config/
    |-- dev.env.js
    |-- index.js
    |-- prod.env.js
|-- index.html
|-- package.json
|-- src/
    |-- App.vue
    |-- assets/
        |-- less/
            |-- basic.less
            |-- reset.less
        |-- logo.png
    |-- components/
        |-- Grid.vue
        |-- Hello.vue
        |-- Navbar.vue
        |-- Sidebar.vue
        |-- frame.vue
        |-- test.vue
    |-- i18n/
        |-- Hello.js
    |-- libs/
        |-- filter.js
    |-- main.js
    |-- pages/
        |-- Hello.vue
        |-- common/
            |-- 404.vue
            |-- login.vue
        |-- test.vue
    |-- router.js
    |-- store/
        |-- index.js
        |-- navIndex.js
        |-- user.js
    |-- store.js
|-- static/

```
此目录在我Github仓库中：[Element-spa-sample](https://github.com/Kinice/Element-SPA-Sample)

注意：生成时为保护隐私，会自动忽略掉'.'开头的文件以及目录。

## 用法

首先确保在机器上安装了Node：

```
$ node listFolder.js -h #用法介绍

$ node listFolder.js <paths> #使用
```

<paths>是本机的目录，支持windows及unix系统目录，支持同时输入多个目录，用空格分开。
