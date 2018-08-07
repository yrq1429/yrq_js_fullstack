const mongoose = require('mongoose'); //数据驱动
const config = require('config-lite'); //配置的工具箱

mongoose.connect(config.mongodb, {
  useMongoClient: true
});
mongoose.Promise = global.promise;


var db = mongoose.connection;
db.once('open', function() {
  console.log("success")
})
