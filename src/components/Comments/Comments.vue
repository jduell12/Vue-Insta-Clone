<template>
    <div 
        v-for="c in comments" 
        :key="c.id"
    >
        <Comment :comment="c" />
    </div>
</template>

<script>
import Comment from './Comment'
export default {
    name: 'Comments', 
    components: {
        Comment
    }, 
    props: {
        comments: {
            type: Array,
            default: () => []
        }
    },
}
</script>
