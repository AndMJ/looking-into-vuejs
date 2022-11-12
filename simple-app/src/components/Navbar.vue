<template>
    <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/" :class="[setActive === 'home' ? 'active' : '', 'nav-link']">Album</router-link></li>
        <li class="nav-item"><router-link to="/About" :class="[setActive === 'about' ? 'active' : '', 'nav-link']">About</router-link></li>
    </ul>
</template>

<script>
export default {
    name:"Navbar",
    data(){
        return {
            active_tab: null
        }
    },
    computed: {
        setActive(){
            if(this.$route.path === "/About"){
                return "about"
            }

            if(this.$route.path === "/"){
                return "home"
            }
        }
    }
}
</script>