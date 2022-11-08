<template>
    <div v-for="task in tasks" :key="task.id">
        <Task :task="task"></Task>
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
    }
}
</script>