# 压测工具

脚本需要使用 artillery 来运行

## 安装 artillery

```
npm install -g artillery
```

## 运行脚本

本机运行
```
artillery run stress_test.yaml
```

测试远端
```
artillery run -t <socketio url> stress_test.yaml
```