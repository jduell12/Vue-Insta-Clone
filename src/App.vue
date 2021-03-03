<template>
  <div>
    <Posts />
  </div>
</template>

<script>

import Posts from './components/Posts/Posts'

export default {
  name: "App", 
  components: {
    Posts
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
