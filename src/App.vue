<template>
    <div class="App">
        <SearchBar />
        <Posts 
            :posts="posts" 
            @likePost="likePost"
        />
    </div>
</template>

<script>
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar'

export default {
    name: "App", 
    components: {
        Posts,
        SearchBar
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
.App {
  text-align: center;
}
.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}
.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}
.App-title {
  font-size: 1.5em;
}
.App-intro {
  font-size: large;
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
