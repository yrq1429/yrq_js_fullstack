// pages/trainPay/trainPay.js
const app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    from: '',
    to: '',
    trainNum: '',
    secondSeat: '',
    needTime: '',
    fromTime: '',
    toTime: '',
    businessSeat: '',
    trainTime: '',
    price: '',
    firstPrice: '',
    businessPrice: '',
    firstSeat:'',
    status: '1',
    totalPrice: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const from = options.from;
    const to = options.to;
    const secondSeat = options.secondSeat;
    const trainNum = options.trainNum;
    const needTime = options.needTime;
    const fromTime = options.fromTime;
    const toTime = options.toTime;
    const businessSeat = options.businessSeat
    const trainTime = options.trainTime;
    const price = options.price;
    const firstPrice = options.firstPrice;
    const businessPrice = options.businessPrice;
    const firstSeat = options.firstSeat;
    console.log(from, to, secondSeat, trainNum, needTime, fromTime, toTime, businessSeat, trainTime);
    this.setData({
      from, to, secondSeat, trainNum, needTime, fromTime, toTime, businessSeat, trainTime, price,
      firstPrice,
      businessPrice,
      firstSeat,
      totalPrice:price
    })

  },
  showStatus(e) {
    // 区分  
    const status = e.currentTarget.dataset.status;
    // console.log(e,status);
    console.log(e);
    // 不再是DOM 编程 ，针对界面状态的编程.
    if (status == 1) {
      this.setData({
        status: status,
        totalPrice:this.data.price
      })
    }
    if (status == 2) {
      this.setData({
        status: status,
        totalPrice:this.data.firstPrice
      })
    }
    if (status == 3) {
      this.setData({
        status: status,
        totalPrice: this.data.businessPrice
      })
    }
    
  },
  goToPay (e) {
    let a = JSON.stringify(this.data.totalPrice);
    wx.showModal({
      title: '提示',
      content: '确定要购买这个火车票吗？',
      success:(res)=> {
        wx.setStorageSync('totalPrice', this.data.totalPrice);
        var trainedList = app.globalData.trainedList;
        var trainItem = {
          from: this.data.from, 
          to: this.data.to,  
          trainNum: this.data.trainNum,
          trainTime: this.data.trainTime,
          totalPrice: this.data.totalPrice
        };
        trainedList.push(trainItem);
        if (res.confirm) {
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/paySuccess/paySuccess',
              success: function (res) {
                // success
              },
              fail: function () {
                // fail
              },
              complete: function () {
                // complete
              }
            })
          }, 1000);
          
        } else if (res.cancel) {
          console.log('取消支付');
          
        }
      }
    })
    
    wx.setStorage('key', 'value')
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})