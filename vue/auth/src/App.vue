<template>
  <div id="app">
    <router-link to="/">/</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/dashboard">/dashboard</router-link>
    <router-link to="/login" v-if="hasLogin">/login</router-link>
    <router-link to="/loginout" v-if="!hasLogin">/loginout</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hasLogin: true
    }
  },
  beforeUpdate() {
    console.log(localStorage.token);
    if (localStorage.token) {
      this.hasLogin = false
    }
    else{
      this.hasLogin = true
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
