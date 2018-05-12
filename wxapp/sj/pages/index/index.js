//index.js
//获取应用实例
import testDrive from "../../modules/test-drive";
// console.log(testDrive);

// 在Page里得到APP
const app = getApp()

Page({
  data: {
   slides:[]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides
    })
  },
  // testDrive:testDrive  可省略一个
  testDrive,
  readMore(event){
    // id?
    const id = event.target.dataset.id;
    wx.navigateTo({
      url:`/pages/vehicies/show?id=${id}`
    })
  }
})
