<template>
    <div class="comment-text">
        <span class="user">{{ comment.username }}</span>
        <br>
        <span class="comment">{{ comment.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'Comment', 
    props: {
        comment: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
.comment-text {
  text-align: left;
  padding: 2px;
  margin-left: 4px;
  margin-bottom: 4px;
}
.comment {
  font-size: 16px;
}
.user {
  font-size: 14px;
  margin-left: 5px;
  color: black;
  font-weight: bold;
}
</style>