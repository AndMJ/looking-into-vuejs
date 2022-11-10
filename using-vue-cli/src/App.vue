<template>
  <div class="container">
    <MarkerHeader @toggle-header-body-marker="toggleAddMakerForm()" :change_button="showAddMarker" title="My markers" add_Button_text="Add Marker" close_Button_text="Close"></MarkerHeader>
    <div v-show="showAddMarker">
      <AddMarkerForm @map-add-marker="addMarker"></AddMarkerForm>
    </div>
    <Map :markers="markers"></Map>

    <br><br><br>
    
    <TaskHeader @toggle-header-body-tasks="toggleAddTaskForm()" :change_button="showAddTask" title="Task Tracker" add_Button_text="Add Task" close_Button_text="Close"></TaskHeader>
    <div v-show="showAddTask">
      <AddTaskForm @add-task="addTask"></AddTaskForm>
    </div>
    <Tasks @toggle-reminder="setReminder" @delete-task="deleteTask" :tasks="tasks"></Tasks>
    
  </div>
</template>

<script>
/* tasks */
import TaskHeader from './components/TaskHeader'
import AddTaskForm from './components/AddTaskForm'
import Tasks from './components/Tasks'
/* markers */
import MarkerHeader from './components/MarkerHeader'
import AddMarkerForm from './components/AddMarkerForm'
import Map from './components/Map'

export default {
  name: 'App',
  components: {
    TaskHeader,
    MarkerHeader,
    Tasks,
    AddTaskForm,
    AddMarkerForm,
    Map
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
      markers: [],
      showAddMarker: false
    }
  },
  methods:{
    addTask(newTask){
      this.tasks.push(newTask)
    },
    deleteTask(id){
      if(confirm("Delete?")){
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    setReminder(id/*, reminder*/){
        //this.tasks.find((task) => task.id === id).reminder = !reminder
        this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    toggleAddTaskForm(){
      this.showAddTask = !this.showAddTask
    },
    addMarker(newMarker){
      this.markers.push(newMarker)
      console.log(this.markers);
    },
    toggleAddMakerForm(){
      this.showAddMarker = !this.showAddMarker
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

    this.markers = [
      {
        id: 1,
        text: "sitio 1",
        pos: {
          lat: 51.5,
          long: -0.09
        }
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