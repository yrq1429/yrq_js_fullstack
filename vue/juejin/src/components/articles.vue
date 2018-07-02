<template>
    <div class="articles">
        <v-article :details = "details"></v-article>
    </div>
</template>

<script>
import article from './article';
import axios from 'axios';
export default {
    data() {
        return {
            details: []
        }
    },
    components: {
        "v-article": article
    },
   created() {
       axios.get('https://www.easy-mock.com/mock/5aded45053796b38dd26e970/juejin#!method=get')
        .then( (res) => {
            this.details = res.data.data.article;
            console.log(this.details)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  

}
</script>

<style>

</style>
