//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    circleList:[],
    colorCircleFirst:'#FFDF2F',
    colorCircleSecond:'#F44D32',
    // 奖品默认颜色
    colorAwardDefalut:'F5F0Fc',
    // 奖品选中的颜色
    colorAwardSelect:'#FFE400',
    indexSelect:0,
    isRunning:false,
    imageAward: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/7.jpg',
      '../../images/8.jpg',
    ]
  },
  //事件处理函数
  onLoad: function () {
    let leftCircle = 7.5;
    let topCircle = 7.5;
    var circleList = [];
    for(var i=0; i<24; i++){
      //设置了每个点的坐标值，页面就会相应的显示
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      }else if (i < 6){
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      }else if (i == 6){
        topCircle = 15;
        leftCircle = 620;
      }else if (i<12){
        topCircle = topCircle + 94;
        leftCircle = 620;
      }else if (i == 12){
        topCircle = 565;
        leftCircle = 620
      }else if(i<18){
        topCircle = 570;
        leftCircle = leftCircle - 102.5
      }else if (i == 18){
        topCircle = 565;
        leftCircle = 15;
      }else if(i < 24){
        topCircle = topCircle -94;
        leftCircle = 7.5;
      }
      circleList[i] = {
        leftCircle,
        topCircle
      }
    }
    this.setData({
      circleList
    })
    setInterval(() => {
      if (this.data.colorCircleFirst == '#FFDF2F') {
        this.setData({
          colorCircleFirst: '#F44D32',
          colorCircleSecond: '#FFDF2F'
        })
      } else {
        this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#F44D32'
        })
      }

    }, 500)
    var awardList = [];
    var topAward = 25;
    var leftAward = 25;
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 50;
        leftAward = 50;
      } else if (j < 3) {
        topAward = topAward;
        leftAward = leftAward + 166.6666 + 30;
      } else if (j < 5) {
        leftAward = leftAward;
        topAward = topAward + 150 + 35;
      } else if (j < 7) {
        leftAward = leftAward - 166.66666 - 35;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 35;
      }
      var imageAward = this.data.imageAward[j];
      awardList.push({
        topAward,
        leftAward,
        imageAward
      })
    }
    this.setData({
      awardList
    })
  },
  
  startGame (){
    setInterval(()=>{
      let index = this.data.indexSelect;
      index++;
      if (index >= this.data.imageAward.length) {
        index = 0;
      }
      this.setData({
        indexSelect:index
      })
    },60)
  }
})
