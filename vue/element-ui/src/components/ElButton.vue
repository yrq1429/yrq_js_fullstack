<template>
<!-- // / -->
  <button
  @click="handleClick"
  :type="nativeType"
  class="el-button"
  :class = "[
    type? 'el-button--' + type : '',
    {'is-disabled': buttonDisabled,
    'is-loading': loading},size?'el-button--'+size:''
  ]"
  
  :disabled="buttonDisabled">
    <!-- <i class="el-icon-loading" v-if="loading"></i>
    <i v-if="icon&&!loading" :class="icon"></i> -->
    <i v-if="loading" :class="loading" ></i>
    <i v-if="icon&&!loading" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
// el-icon-loading
export default {
  name: 'ElButton',
  data(){
      return {
        
      }
  },
  // 父传子
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    loading: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type:String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    buttonDisabled () {
      return this.disabled;
    }
  },
  methods: {
    handleClick(evt) {
      // console.log(evt);
      // 孩子通过$emit与父组件交流   子传父
      this.$emit('click', evt)
      
    }
  }
}  
</script>
<style>

</style>
