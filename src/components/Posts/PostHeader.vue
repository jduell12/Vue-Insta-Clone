<template>
    <div class="post-header">
        <div class="post-thumb-wrapper">
            <img 
                :src="thumbnailUrl" 
                alt="post header" 
                class="post-thumb" 
            > 
        </div>
        <h2>{{ username }}</h2>
    </div>
</template>

<script>

export default{
    name: 'PostHeader',
    props: {
        thumbnailUrl: {
            type: String, 
            default: ''
        }, 
        username:{
            type: String, 
            default: ''
        }
    }
}

</script>

<style scoped>
.post-header{
  display: flex;
  align-items: center;
}
.post-header h2 {
  font-size: 14px;
  font-weight: bold;
}
.post-thumb-wrapper {
  height: 50px;
  width: 50px;
}
.post-thumb {
  height: 80%;
  margin: 5px;
  border-radius: 50%;
}
</style>