<template>
    <div>
        <comment-form @addComment="addComment"/>
        <comment-list :list="list"/>
        <pagination :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"/>
    </div>
</template>

<script>
import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'
import Pagination from '@/components/Pagination'

export default {
    data() {
        return {
            
            // Pagination 组件无法独立，都由list控制
            pagesize: 3,
            // totalData 所有的数据 => 当前页面的评论
            totalData: [],
            list: [],
            totalCount: 0,
            currentPage: 1
        }
    },
    components: {
        CommentForm,
        CommentList,
        Pagination
    },
    methods: {
        addComment(msg) {
            this.totalData.unshift({text:msg});
            this.totalCount = this.totalData.length;
            
            if (this.totalCount < this.pagesize) {
                this.list = this.totalData.slice(0, this.totalCount);
            }else {
                this.list = this.totalData.slice(0, this.pagesize)
            }
            this.currentPage = 1;
        },
        turnPage(curr) {
            console.log(curr);
            this.currentPage = curr;
            this.list = this.totalData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
        }
    }
}
</script>

<style>

</style>
