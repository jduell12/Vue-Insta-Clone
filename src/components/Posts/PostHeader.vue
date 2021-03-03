<template>
    <div>
        <div>
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