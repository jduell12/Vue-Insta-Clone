<template>
    <div>
        <Posts 
            :posts="posts" 
            @likePost="likePost"
        />
    </div>
</template>

<script>
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
    //fetches data to populate the state of posts 
    async mounted(){
        this.posts = await this.fetchPosts()
    }, 
    methods: {
        async fetchPosts(){
            const res = await fetch('api/posts')
            const data = await res.json()
            return data 
        },
        async fetchPost(postId){
            const res = await fetch(`api/posts/${postId}`)
            const data = await res.json()

            return data 
        },
        async likePost(postId){
            const postToUpdate = await this.fetchPost(postId)
            const updatedPost = {...postToUpdate, likes: postToUpdate.likes+1}

            const res = await fetch(`api/posts/${postId}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(updatedPost)
            })

            const data = await res.json()

            this.posts = this.posts.map(post => post.id === postId ? {...post, likes: post.likes+1} : post)
        }
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
