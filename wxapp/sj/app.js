//app.js
// 应用启动  onLaunch
//  APP -> Page 
// 全局的，应用级别的一些行为，添加全局的数据
import db from './assets/db.js';
App({
  onLaunch: function () {
    Object.assign(this.globalData,db);
    // ajax请求
    // wx.request({
    //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
    //   success: (response) => {
    //     // success
    //     console.log(response);
    //     Object.assign(this.globaData,response.data);
    //     console.log(this.globaData);
        
    //   },
    //   fail:(error)=> {
    //     // fail
    //     console.log(error);
        
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
  },
  globalData: {

  }
})