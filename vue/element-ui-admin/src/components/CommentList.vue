<template>
    <div>
        <comment-item v-for="(item, index) in list" :key="index" :content="item" />
        <div v-if="list.length == 0" class="empty-msg">当前没有评论</div>
    </div>
</template>

<script>
import CommentItem from '@/components/CommentItem'
export default {
    components: {
        CommentItem
    },
    props: {
        'list': Array
    }
}
</script>

<style>

</style>
