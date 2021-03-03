<template>
    <div class="posts-container-wrapper">
        <h1>Posts</h1>
        <div 
            v-for="post in posts" 
            :key="post.id"
        >
            <Post :post="post" />
        </div>
    </div>
</template>

<script>
import Post from './Post'
export default {
    name: 'Posts', 
    components: {
        Post
    },
    props:{
        posts: {
            type: Array, 
            default: () => []
        }
    }, 
    
}
</script>

<style scoped>
.posts-container-wrapper{
    height: 50%;
    width: 33%;
    min-width: 400px;
    margin: 5px auto;
}
</style>