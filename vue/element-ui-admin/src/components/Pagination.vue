<template>
    <el-col :span="24" class="pagination">
        <el-pagination layout="prev, pager, next" :current-page="currentPage" :page-size="pagesize" :total="totalCount" style="float:right" @current-change="handleCurrentPage">
        </el-pagination>
    </el-col>
</template>

<script>
export default {
    props: ['totalCount', 'currentPage', 'pagesize'],
    methods: {
        handleCurrentPage(val) {
            this.$emit('turnPage', val);
        }
    }
}
</script>

<style>

</style>
