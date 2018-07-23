<template>
    <div>
        <router-link to="/">
            <button @click="out">退出</button>
        </router-link>
    </div>
</template>

<script>
export default {
    methods: {
        out() {
            localStorage.removeItem('token');
        }
    }
}
</script>

<style>

</style>
