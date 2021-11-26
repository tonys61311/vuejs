module.exports= {
    // <!--所有的资源都会被链接为相对路径, 此属性相当于2.x中的 assetsPublicPath-->
    publicPath: './',
    // <!--生产环境构建文件的目录-->
    outputDir: 'dist',
    // <!--放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。-->
    assetsDir: 'static', 
    // <!--是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。-->
    // <!--这个值会在 @vue/cli-plugin-eslint 被安装之后生效。-->
    lintOnSave: process.env.NODE_ENV === 'development',
    // <!--如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。-->
    productionSourceMap: false, 
    // <!--所有 webpack-dev-server 的选项-->
    devServer:{
        // <!--端口号-->
        port: process.env.port || 9527,
        // <!--dev-server在服务器启动后打开默认浏览器-->
        open: true,
        // <!--出现编译器错误或警告时，在浏览器中显示全屏覆盖。-->
        overlay: {
          warnings: false,
          errors: true
        },
        // <!--如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
        // 你需要在开发环境下将 API 请求代理到 API 服务器。-->
        proxy:{
            '/api': {
                target: 'http:www.baidu.com', // 要代理的API地址
                changeOrigin: true, // 允许跨域
                // <!--这里理解成用'/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替--> 
                // <!--比如我要调用'http://www.abc.com/user/add'，直接写'/api/user/add'即可'-->
                pathRewrite: {
                    '^/api' : ''
                }
            },
            '/foo': {
                target: '<other_url>'
            },
        },
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
        } else {
          // 为开发环境修改配置...
        }
      }
}
// 配置參考以下 :
// https://juejin.cn/post/6844904069958467591?utm_source=gold_browser_extension
// 拔掉以下
// configureWebpack: {
//     name: name,
//     resolve: {
//       alias: {
//         '@': resolve('src')
//       }
//     }
//   }
// configureWebpack 配置另外參考 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F