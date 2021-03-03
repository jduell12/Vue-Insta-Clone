<template>
    <div class="post-border">
        <PostHeader 
            :username="post.username" 
            :thumbnail-url="post.thumbnailUrl" 
        />
        <div class="post-image-wrapper">
            <img 
                :src="post.imageUrl" 
                alt="post thumbail" 
                class="post-image"
            >
        </div>
        <LikeSection 
            :likes="post.likes" 
            :likepost="post"
            @likePost="$emit('likePost', post.id)"
        />
        <Comments :comments="post.comments" />
    </div>
</template>

<script>
import PostHeader from './PostHeader'
import LikeSection from './PostLike'
import Comments from '../Comments/Comments'

export default{
    name: 'Post', 
    components: {
        PostHeader, 
        LikeSection,
        Comments
    },
    props: {
        post: {
            type: Object, 
            default: () => {}
        }, 
    }, 
    emits: ['likePost']
    
}
</script>

<style scoped>
.post-border {
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}
.post-image {
  width: 100%;
}
.post-image-wrapper {
  height: 100%;
  width: 100%;
}

</style>