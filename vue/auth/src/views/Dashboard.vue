<template>
    <div>
        Dashboard
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            console.log(this.$router);
            this.$router.replace('/')
        }, 1000);
        console.log(this.$router);
        
    }
}
</script>

<style>

</style>
