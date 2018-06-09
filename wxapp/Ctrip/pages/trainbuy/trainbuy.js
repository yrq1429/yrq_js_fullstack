// pages/trainbuy/trainbuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addShow:true,
    from:"上海虹桥",
    to:"北京",
    addtext:'',
    addShowto:true,
    addtextto:'',
    startDate: '2018-06-02',
  },
  bindDateChange(e) {
    const type = e.currentTarget.dataset.type;
    if (type == 'startPicker') {
      this.setData({
        startDate: e.detail.value,
      })
    } else {
      this.setData({
      })
    }
  },
  from(){
    this.setData({
      addShow:false
    })
  },
  to() {
    this.setData({
      addShowto: false
    })
  },
  setInput: function (e) {
    // console.log(e.detail.value);
    this.setData({
      addText: e.detail.value
    })
  },
  setInputto: function (e) {
    // console.log(e.detail.value);
    this.setData({
      addTextto: e.detail.value
    })
  },
  addTodo: function (e) {
    this.setData({
      from: this.data.addText,
      addShow:true
    })
  },
  addTodoto: function (e) {
    this.setData({
      to: this.data.addTextto,
      addShowto: true
    })
  },
  addTodoShow: function (e) {
    this.setData({
      addShow: false
    })


  },
  addTodoHide: function (e) {
    this.setData({
      addShow: true
    })

  },
  addTodoHideto: function (e) {
    this.setData({
      addShowto: true
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  change(){
    this.setData({
      from:this.data.to,
      to:this.data.from
    })
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