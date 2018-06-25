<template>
  <button
  class="el-button"
  :class = "[
    type? 'el-button--' + type : '',
    {'is-disabled': buttonDisabled,
    'is-loading': loading}
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
    }
  },
  computed: {
    buttonDisabled () {
      return this.disabled;
    }
  }
}  
</script>
<style>

</style>
