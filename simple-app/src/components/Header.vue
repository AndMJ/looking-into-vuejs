<template>
    <header class="d-flex justify-content-center py-3">
        <Navbar></Navbar>
    </header>
</template>

<script>
import Navbar from "./Navbar.vue"

export default{
    name:"Header",
    components:{
        Navbar
    }
}
</script>