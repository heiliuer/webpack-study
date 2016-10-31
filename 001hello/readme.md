1.安装webpack

- ```npm install -g webpack```

2.webpack 打包js模块

- ```webpack js/Main.js build/bundle.js``` 

2.webpack 打包js 指定css loader 相当于 require("!style!css!.. 中的!style!css!

- ```webpack js/Main.js build/bundle.js --module-bind 'css=style!css'``` 



