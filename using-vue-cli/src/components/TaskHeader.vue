<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="isHome" @btn-click="$emit('toggle-header-body-tasks')" :color="button_change ? 'darkred' : 'green'" :text="button_change ? close_Button_text : add_Button_text"></Button>
    </header>
</template>

<script>
import Button from "./Button.vue"

export default {
    name:"TaskHeader",
    props: {
        title: String,
        button_change: Boolean,
        add_Button_text: String,
        close_Button_text: String,
    },
    components: {
        Button
    },
    emits:["toggle-header-body-tasks"],
    computed:{
        isHome(){
            if(this.$route.path === "/") {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>