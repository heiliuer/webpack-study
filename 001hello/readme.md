1.安装webpack

- ```npm install -g webpack```

2.webpack 打包js模块

- ```webpack js/Main.js build/bundle.js``` 

2.webpack 打包js 指定css loader 相当于 require("!style!css!.. 中的!style!css!   命令--module-bind 参数注意引号

- ```webpack js/Main2.js build/bundle.js --module-bind "css=style!css"``` 



