![](https://user-gold-cdn.xitu.io/2018/6/9/163e4881bb3dde3e?w=667&h=430&f=jpeg&s=54454)     
# 一场说走就走的旅行开始啦
---     
随着小程序的大热，作为一个程序猿，我也开始接触并且大概了解了一个制作小程序的一些过程，为了提高自己的动手能力，于是乎，我开始来仿写携程的小程序，来实现一些基本功能，在仿写的过程中，也遇到了一些难题，也有了一点收获，希望可以通过这篇文章与大家共同交流，共同进步。      
# 前言
---
为了更好的开发，我们需要准备我们需要的工具：
- *Vscode*：这里主要用来具体代码的编写
- *微信开发者工具*：通过这个看效果图
- *EasyMock*: 通过这个网站可以伪造一些数据来供我们使用，非常方便。这个是我的[数据接口](https://www.easy-mock.com/mock/5b1266782c0adb523338b0f7/ctrip#!method=get)
# 具体实现
---
### 功能效果如下

![](https://user-gold-cdn.xitu.io/2018/6/9/163e5014ecc057dd?w=333&h=562&f=gif&s=356149)     
### 查询功能的实现
1.首先需要在查询之前获取输入的所在城市以及到的城市，以及时间的选择，通过这些条件去筛选，所以需要在点击查询按钮的时候绑定一个时间，需要携带参数去进行查询      
```
<navigator class="search"  url="/pages/trainBuyContent/trainBuyContent?from={{from}}&to={{to}}&trainTime={{startDate}}">查询</navigator>
```     
2.需要到跳转的页面接收参数通过onload事件的options获取
```
    var from = options.from;
    var to = options.to;
    var trainTime = options.trainTime;
```
3.最重要的是筛选出相关数据，这里需要一个for循环的判断语句，在请求数据地址URL的时候，通过for循环和if语句找出相对应的数据文件里面所对应的json数据。
```
wx.request({
      url: API_BASE,
      success: (res) => {
        for(var i=0;i<res.data.data.trainList.length;i++){
          if (from == res.data.data.trainList[i].from && to == res.data.data.trainList[i].to && trainTime == res.data.data.trainList[i].trainTime){
            temp.push(res.data.data.trainList[i]);
          }
        }
        this.setData({
          searchedList:temp
        })
      }
    })
```
4.这时候再在页面通过for循环输出就可以了
```
wx:for="{{searchedList}}"
wx:key="{{item.id}}"
temp.push(res.data.data.trainList[i]);
this.setData({
          searchedList:temp
        })
```


`
*小程序页面传值的方式：1.url传值2.本地储存3.全局的app对象
`
### 订单查询的实现
##### 这里我采用了全局的app对象保存
1.先获取全局对象，然后在点击确定购买的success回调函数的时，去获取所有的信息，以一个json格式去获取
```
const app = getApp();
var trainedList = app.globalData.trainedList;
var trainItem = {
          from: this.data.from, 
          to: this.data.to,  
          trainNum: this.data.trainNum,
          trainTime: this.data.trainTime,
          totalPrice: this.data.totalPrice
        };
trainedList.push(trainItem);
```
2.然后在相应的页面去获取这个全局的数组
```
onLoad: function (options) {
    this.setData({
      trainedList: app.globalData.trainedList
    })
    
  },
```
3.通过一个for循环让其输出在页面

![](https://user-gold-cdn.xitu.io/2018/6/10/163e588465c78b7f?w=310&h=554&f=jpeg&s=42970)    

### 其他功能
还有一部分功能未能展示或者未完善，请大家见谅。
### 源码地址
 GitHub地址：[https://github.com/yrq1429/yrq_js_fullstack/tree/master/wxapp/Ctrip](https://github.com/yrq1429/yrq_js_fullstack/tree/master/wxapp/Ctrip)

# 小总结
第一次发表文章有点小慌张，写的不好希望大家谅解，说实话，在我看来，这次所写的东西确实有点'糙'，但还是很开心自己能坚持写下来，功能方面以后会继续完善，希望能得到各位大佬们的意见和建议，没啥说的，继续努力吧，路漫漫其修远兮，Just do it!




![](https://user-gold-cdn.xitu.io/2018/6/9/163e524d3d7b1204?w=450&h=338&f=jpeg&s=35757)



