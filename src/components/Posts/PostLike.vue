<template>
    <div>
        <div
            key="likes-icons-container"
            class="like-section"
        >
            <div class="like-section-wrapper">
                <i class="far fa-heart" />
            </div>
            <div class="like-section-wrapper">
                <i 
                    class="far fa-thumbs-up" 
                    @click="$emit('likePost', likepost.id)" 
                />
            </div>
        </div>
        <p class="like-number">
            {{ likes }} likes
        </p>
    </div>
</template>

<script>

export default{
    name: 'PostLike', 
    props: {
        likes: {
            type: Number,
            default: 0
        },
        likepost: {
            type: Object,
            default: () => {}
        }
    },
    emits: ['likePost']
}
</script>

<style scoped>
.like-section {
  display: flex;
  justify-content: flex-start;
}
.like-section-wrapper {
  height: 10px;
  width: 10px;
  margin: 10px;
}
.like-number {
  width: 100px;
  margin: 15px 0px;
  font-size: 16px;
}
</style>