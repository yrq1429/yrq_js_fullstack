<template>
  <div class="el-form-item">
    <label class="el-form-item__label" v-if="label || $slots.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="el-form-item__container">
      <slot />
    </div>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  props: {
    label: String,
    prop: String
  },
  mixins: [emitter],
  mounted () {
    // fields 生成一下
    this.dispatch('ElForm', 'el.form.addField', [this])
  },
  computed: {
    form () {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    }
  },
  methods: {
    validate (trigger, callback) {
      // 当前item rules 对应得rule是什么？  el-input得值是什么
      const rules = this.form.rules;
      const item_rule = rules[this.prop];
      console.log(item_rule);
    }
  },
}
</script>

<style>

</style>
