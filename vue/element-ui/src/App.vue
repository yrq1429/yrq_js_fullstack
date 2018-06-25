<template>
  <div id="app">
    <el-button loading
    type="success">
      提交
    </el-button>
<!-- // loading="el-icon-loading" -->
    <el-button 
    :loading = "loading"
    icon="el-icon-edit"
    type="primary" @click.native="changeStatus">
    </el-button>
    <el-button :disabled="disabled"
    type="info">
      提交
    </el-button>

    <el-button :disabled="disabled"
    type="warning">
      提交
    </el-button>

    <el-button :disabled="disabled"
    type="danger">
      提交
    </el-button>
  </div>
</template>
<script>
import ElButton from '@/components/ElButton'
export default {
  name: 'App',
  data () {
    return {
      disabled: false,
      loading: ""
    }
  },
  components: {
    'el-button': ElButton
  },
  mounted () {
    // setTimeout(() => {
    //   this.disabled = true;
    // }, 2000);
  },
  methods: {
    changeStatus:function(){
      console.log("aaa");
      this.loading = "el-icon-loading"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
