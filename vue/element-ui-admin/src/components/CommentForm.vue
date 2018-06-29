<template>
    <form class="input-area">
        <label for="">用户名:</label>
        <input type="text" class="user" placeholder="请输入用户名" ref="username"> 
        <label for="">评论:</label>
        <textarea class="textarea" placeholder="请输入评论内容" ref="content"></textarea>
        <button type="button" @click="doComment">提交</button>
    </form>
</template>

<script>
export default {
    methods: {
        doComment() {
            // 接受自定义组件
            const user = this.$refs.username.value;
            const content = this.$refs.content.value;
            const pubTime = new Date().toLocaleString();
            this.$emit('addComment', `${user}:${content},发布于${pubTime}`);
            this.$refs.content.value = ''
        }
    }
}
</script>

<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}

</style>
