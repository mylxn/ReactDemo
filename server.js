var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');  //默认到node-module找
var config = require('./webpack.config.js');  //加路径防止默认找不到

new webpackDevServer(webpack(config),{
  //config 能拿到config.server.js中的配置
  contentBase: __dirname + '/prd',//起server的根
  inline:true,  //当源文件改变是自动刷新页面
  hot: true, //热更新
  historyApiFallback:true,
  proxy:{
    '/rest/*':{
      target:'http://localhost:8899',//可以代替联调  写公司内部任何的地址 解决跨域
      secure:false,//是否启用安全
      pathRewrite:{
        '^/rest':''
      }
    }
  }
})
.listen(80,'localhost',function(err,result){
  if (err) {
    console.log(err);
  } else {
    console.log('Listening at localhost：80');
  }
});
