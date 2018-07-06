<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from '@/components/header/header.vue';
const response = require('./common/data/seller.json');
export default {
  name: 'App',
  data() {
    return {
      seller: {
          // id: (() => {
          //   let queryParam = urlParse();
          //   return queryParam.id;
          // })()
        }
    }
    
  },
  created() {
    this.seller = Object.assign({}, this.seller, response.data)
  },
  components: {
    // HelloWorld
    'v-header': header
  }
}
</script>

<style lang="stylus">
 @import "./common/stylus/mixin.styl";
li
  list-style none
*
  margin: 0;
  padding: 0;
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        text-decoration none
        &.active
          color: rgb(240, 20, 20)
</style>
