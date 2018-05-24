//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow:false,
    focus:false,
    addText:'',
    lists:[]
  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true,
        
      })
    }
    wx.getStorage({
      key: 'lists',
      success: (res)=>{
        // success
        console.log(res);
        this.setData({
          'lists': res.data
        })
      },
      
      
    })
  },
  getUserInfo:function (e) {
    console.log(e);
    this.setData({
      hasUserInfo:true,
      userInfo:e.detail.userInfo,
      addShow: true
    })
    // 存储数据
    wx.setStorage({
      // userInfo:e.detail.userInfo
      key:'userInfo',
      data:e.detail.userInfo,
      success:function () {
        console.log('保存成功');
      }
    })
  },
  addTodoHide(e) {
    this.setData({
      addShow:false,
      focus:false,
      addText:''
    })
  },
  addTodo(e){
    // value list setStorage
    if (!this.data.addText.trim()) {
      return;
    }
    // item 都是一个对象 文字只是一部分
    var addT = {
      title:this.data.addText,
      status:0,
      id:new Date().getTime()
    };
    console.log(addT);
    // var temp = this.data.lists;
    // temp.push(addT);
    const temp = [
      addT,
      ...this.data.lists
    ]
    this.setData({
      lists:temp
    })
    wx.setStorage({
      key: 'lists',
      data: temp,
      success: function(res){
        // success
      },
    })
    wx.showToast({
      title:'添加成功',
      icon:'sucess',
      duration:1000
    })
    this.addTodoHide();
  },
  setInput (e) {
    // console.log(e.detail.value);
    this.setData({
      'addText':e.detail.value
    })
  }

  
})
