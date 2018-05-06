//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据绑定
  data: {
    latitude:39.914769,
    longitude:116.404556,
    scale:15,
    controls:[]
  },
  onReady:function () {
    // 小程序提供了获取经纬度方法  
    console.log('ready');
    wx.getLocation({
      type:'gcj02',
      success:(res) => {
        console.log(res.latitude,res.longitude,);
        // 重新设置data里面的数据
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          scale:18
        })
      }
    })
    // data 数据初始化，数据随着生命周期，用户的请求发生变化，
    //数据是会变的，绑定者数据的界面也要随之改变，自动刷新页面 setData 就是这样的一个API
    // Page 先显示地图，晚一点显示control
    this.setData({
      controls:[{
        id:1,
        iconPath:'/images/location.png',
        position:{
          left:20,
          top:200,
          height:50,
          width:50
        }
      }]
    })
  },
  // 生命周期函数
  onLoad:function () {
    console.log('load');
  }
})
