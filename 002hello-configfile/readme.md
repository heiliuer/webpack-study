- 安装webpack

    - ```npm install -g webpack```

- webpack 打包js,css模块

    - ```webpack``` 

- webpack 打包js,css模块 漂亮的输出

    - ```webpack --progess --colors``` 

- webpack 监测文件变动，自动编译

    - ```webpack --progess --colors --watch``` 
    
- webpack http测试服务器

    - 安装依赖
        - ```npm install -g webpack-dev-server```     
    - 开启服务器
    - ```webpack-dev-server --progess --colors --watch```    
    >  This binds a small express server on localhost:8080 which serves your static assets as well as the bundle (compiled automatically). It automatically updates the browser page when a bundle is recompiled (SockJS). Open http://localhost:8080/webpack-dev-server/bundle in your browser.
    >  The dev server uses webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk. Instead it keeps and serves the resulting files from memory.
    






