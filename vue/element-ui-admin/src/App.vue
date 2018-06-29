<template>
  <div id="app">
    <!-- <login/> -->
    <!-- <div class="editor-container">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="content" :height="300" :zIndex="20"></markdown-editor>
    </div>
    <el-button @click="markdown2Html" style="margin-top:80px;" type="primary" icon="el-icon-document">To HTML</el-button>
    <div v-html="html"></div> -->
    <!-- <p v-html="content"></p> -->
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="女"></ele-radio>
      <ele-radio label="男"></ele-radio>
    </ele-radio-group> -->
    <!-- <comment /> -->
    <article-table />
  </div>
</template>

<script>
import EleRadio from '@/components/EleRadio'
// @表示alias 地址短链接 在哪里都指向src 让地址引入更加轻松
import Login from '@/views/Login'
import MarkdownEditor  from '@/views/markdownEdit'
import EleRadioGroup from '@/components/EleRadioGroup'
import Comment from '@/components/Comment'
import ArticleTable from '@/views/ArticleTable'
// const content = `
// # abc
// ## hello world
// `
export default {
  name: 'App',
  components: {
    // 两种命名方式
    'login': Login,
    MarkdownEditor,
    EleRadioGroup,
    EleRadio,
    Comment,
    ArticleTable
  },
  data() {
    return {
      // content: '',
      html: '',
      content: '<span>美团挂了，还有UC</span>',
      sex: 0
    }
  },
   methods: {
    markdown2Html() {
      import('showdown').then(showdown => {
        const converter = new showdown.Converter()
        this.html = converter.makeHtml(this.content)
      })
    }
  }
}
</script>
<!-->scoped  整个页面的公共样式<-->
<style lang="scss">
$bg: #2d3a46;
$light_gray: #eee;
* {
    margin: 0;
    padding: 0;
}
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        // -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<!-->scoped  整个页面的单独样式<-->
