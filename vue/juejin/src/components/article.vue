<template>
<div class="article">
    <div class="content-box" v-for="(item,index) in details" :key="index">
        <div  class="info-box">
            <div  class="info-row meta-row">
                <ul  class="meta-list">
                   <li  class="item hot">{{item.status}}</li>
                   <li  class="item post">专栏</li>
                   <li  class="item username clickable">
                       <div  class="user-popover-box">
                          <span>{{item.author}}</span> 
                        </div>
                    </li>
                    <li  class="item">{{item.time}}小时前</li>
                    <li  class="item tag"><span class="tag">{{item.column}}</span> 
                    </li>
                </ul>
        </div>
        <div class="info-row title-row">
            <span class="title">{{item.title}}</span>
        </div>
        <div class="info-row action-row">
            <ul  class="action-list">
                <li class="item like clickable">
                    <span  class="count">{{item.starts}}</span>
                </li>
                <li class="item comment clickable"> {{item.comment}}
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
   
   props: {
       details: {
           type: Array
       }
   }
}
</script>

<style>

</style>
