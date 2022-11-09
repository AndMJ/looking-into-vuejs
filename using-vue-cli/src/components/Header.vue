<template>
    <header>
        <h1>{{title}}</h1>
        <Button @btn-click="$emit('toggle-add-task-form')" :color="change_button ? 'darkred' : 'green'" :text="change_button ? 'Close Task' : 'Add Task'"></Button>
    </header>
</template>

<script>
import Button from "./Button.vue"

export default {
    name:"Header",
    props: {
        title: String,
        change_button: Boolean
    },
    components: {
        Button
    },
    emits:["toggle-add-task-form"]
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