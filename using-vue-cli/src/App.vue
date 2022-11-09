<template>
  <div class="container">
    <Header title="Task Tracker"></Header>
    <Tasks @toggle-reminder="setReminder" @delete-task="deleteTask" :tasks="tasks"></Tasks>
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'


export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  methods:{
    deleteTask(id){
      if(confirm("Delete?")){
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    setReminder(id/*, reminder*/){
        //this.tasks.find((task) => task.id === id).reminder = !reminder
        this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    }
  },
  created(){ //on page creation do:
    this.tasks = [
      {
        id: 1,
        text: "Fazer aquilo",
        date: "1/1/2001",
        reminder: true
      },
      {
        id: 2,
        text: "Ir ali",
        date: "2/2/2001",
        reminder: true
      },
      {
        id: 3,
        text: "Programar isto",
        date: "3/3/2001",
        reminder: false
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>