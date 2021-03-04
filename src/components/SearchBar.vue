<template>
    <div class="search-bar">
        <h1>Vue Insta-Clone</h1>
        <div class="search-bar-wrapper">
            <div class="social">
                <i class="fab fa-instagram" />
            </div>
            <form class="search-form">
                <input 
                    v-model="searchterm"
                    type="text" 
                    name="search" 
                    placeholder="Search"
                >
            </form>
            <div class="social-wrapper">
                <div class="social">
                    <i class="far fa-compass" />
                </div>
                <div class="social">
                    <i class="fas fa-heart" />
                </div>
                <div class="social">
                    <i class="fas fa-circle" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar', 
    props:{
        search: {
            type: String, 
            default: ''
        }
    },    
    emits: ['changeHandler'],
    data(){
        return {
            searchterm: ''
        }
    },
    
}
</script>

<style scoped>
.search-bar{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.search-bar-wrapper {
  border-bottom: 1px solid #3333;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
}
.search-form {
  width: 150px;
  font-size: 14px;
}
.search-form input {
  text-align: center;
  color: #262626;
}
.logo-image {
  height: 100%;
}
.social-wrapper {
  display: flex;
}
.social {
  width: 50px;
}
</style>