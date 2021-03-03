<template>
    <div class="posts-container-wrapper">
        <div 
            v-for="post in posts" 
            :key="post.id"
        >
            <Post 
                :post="post" 
                @likePost="$emit('likePost', post.id)"
            />
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
    emits: ['likePost']
    
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