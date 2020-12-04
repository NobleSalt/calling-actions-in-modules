<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test/emizuhub">Test</router-link>
    <div v-if="mobile">mobile</div>
    <div v-else>Desktop</div>
  </div>
  <router-view/>
</template>

<script>
import isMobile from '@/utils/deviceDetect'

export default {
  name: 'App',
  data () {
    return {
      mobile: false
    }
  },
  created () {
    if (isMobile()) {
      this.mobile = true
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
