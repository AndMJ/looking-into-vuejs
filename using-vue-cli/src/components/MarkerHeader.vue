<template>
    <header>
        <h1>{{title}}</h1>
        <Button @btn-click="$emit('toggle-header-body-marker')" :color="change_button ? 'darkred' : 'green'" :text="change_button ? close_Button_text : add_Button_text"></Button>
    </header>
</template>

<script>
import Button from "./Button.vue"

export default {
    name:"MarkerHeader",
    props: {
        title: String,
        change_button: Boolean,
        add_Button_text: String,
        close_Button_text: String,
    },
    components: {
        Button
    },
    emits:["toggle-header-body-marker"]
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