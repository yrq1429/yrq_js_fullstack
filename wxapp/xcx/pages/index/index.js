//index.js
//获取应用实例
import config from '../../utils/config';
import util from "../../utils/index";
const app = getApp()

Page({
  data: {
    hiddenLoading:false,
    hasMore:true,
    page: 1,
    pageSize: 4,
    days: 3,
    articleList:[]
  },
  onLoad () {
    this.requestArticle();
    
  },
  requestArticle() {
    util.request({
      url: 'list',
      mock: true,
      data: {
        tag: '微信热门',
        start: this.data.page || 1,
        days: this.data.days || 3,
        pageSize: this.data.pageSize,
        langs: 'en'
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        hiddenLoading:true,
        articleList:res.data
      })
    })
  },
  onShareAppMessage() {
    let title = config.defaultShareText || '';
    return {
      title,
      path: `/pages/index/index`,
      success(res) {

      },
      fail(res) {

      }
    }
  },
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page+1;
      this.setData({
        page:nextPage
      });
      this.requestArticle();
    }
  },
  onPullDownRefresh(){
    this.setData({
      hiddenLoading:false
    })
    this.requestArticle();
  },
  showDetail(e) {
    let dataset = e.currentTarget.dataset;
    let item = dataset && dataset.item;
    let contentId = item.contentId || 0;
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`,
      success: function(res){
        // success
      },
    })
  }
})
