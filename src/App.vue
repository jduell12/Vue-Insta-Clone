<template>
  <div>
    <Posts :posts="posts"/>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';

import Posts from './components/Posts/Posts'

export default {
  name: "App", 
  components: {
    Posts
  }, 
  data(){
    return{
      posts: []
    }
  }, 
  methods: {
    async fetchPosts(){
      const res = await fetch('api/posts')
      const data = await res.json()
      return data 
    }
  }, 
  //fetches data to populate the state of posts 
  async mounted(){
    this.posts = await this.fetchPosts()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
