<template>
    <div v-for="task in tasks" :key="task.id">
        <Task @dblclick="$emit('toggle-reminder', task.id/*, task.reminder*/)" @delete-task="$emit('delete-task', task.id)" :task="task"></Task>
    </div>
</template>

<script>
import Task from "./Task"

export default {
    name:"Tasks",
    props: {
        tasks: Array
    },
    components:{
        Task
    },
    emits:["delete-task","toggle-reminder"]
}
</script>