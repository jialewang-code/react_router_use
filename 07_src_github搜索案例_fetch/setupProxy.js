const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {//带有/api1前缀的请求，就会触发代理配置
      target: 'http://localhost:5000',//请求转发的目标
      changeOrigin: true,//控制服务器收到的请求头中Host字段的值
      pathRewrite: { '^/api1': '' }//重写请求路径(必需)
    })
  )
}