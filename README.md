# goodscar

# 1，开发环境搭建

在car-server文件夹下运行下列命令
2，配置npm镜像

```js
//查看包来源：
npm config get registry

//切换包来源：
npm config set registry=https://registry.npm.taobao.org/
```

3，安装 **json-server** ，接口服务器

一款简单的本地服务器模拟工具

```txt
//安装
npm i -g json-server

//验证是否安装成功，返回版本号，证明安装成功
json-server -v

// 运行接口项目
在car-server文件夹下运行
npm run mock
// 测试项目是否成功
http://localhost:3000/goods
```

