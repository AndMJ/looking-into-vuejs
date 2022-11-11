<template>
    <div>
        <AddTaskForm v-show="showAddTask" @add-task="addTask"></AddTaskForm>
        <Tasks @toggle-reminder="setReminder" @delete-task="deleteTask" :tasks="tasks"></Tasks>
    </div>
</template>

<script>
import AddTaskForm from '../components/AddTaskForm'
import Tasks from '../components/Tasks'

export default {
    name:"Home",
    components:{
        AddTaskForm,
        Tasks
    },
    props: {
        showAddTask: Boolean
    },
    data(){
        return {
            tasks: []
        }
    },
    methods:{
    async addTask(newTask){
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newTask)
      })
      const data = await res.json()

      this.tasks.push(data)
    },
    async updateTask(id, dataToPatch){
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method:"PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify(dataToPatch)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? task = data : task)
    },
    async deleteTask(id){
      if(confirm("Delete?")){
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE"
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : "Error deleting task"
      }
    },
    async setReminder(id){
        const taskToToggle = await this.getTaskById(id)
        
        const updTask = {
          reminder: !taskToToggle.reminder
        }

        this.updateTask(id, updTask)
        
        //this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    async getAllTasks(){
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()

      return data
    },
    async getTaskById(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()

      return data
    }
  },
  async created(){ //on page creation do:
    this.tasks = await this.getAllTasks()

  }
}
</script>