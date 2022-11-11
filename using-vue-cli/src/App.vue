<template>
  <div class="container">
    <!-- <MarkerHeader @toggle-header-body-marker="toggleAddMakerForm()" :change_button="showAddMarker" title="My markers" add_Button_text="Add Marker" close_Button_text="Close"></MarkerHeader>
    <div v-show="showAddMarker">
      <AddMarkerForm @map-add-marker="addMarker"></AddMarkerForm>
    </div>
    <Map></Map>

    <br><br><br> -->
    
    <TaskHeader @toggle-header-body-tasks="toggleAddTaskForm()" :button_change="showAddTask" title="Task Tracker" add_Button_text="Add Task" close_Button_text="Close"></TaskHeader>
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
/* tasks */
import TaskHeader from './components/TaskHeader'

/* markers */
import MarkerHeader from './components/MarkerHeader'
import AddMarkerForm from './components/AddMarkerForm'
import Map from './components/Map'

import Footer from "./components/Footer"
import router from "./router"

export default {
  name: 'App',
  components: {
    MarkerHeader,
    Map,
    AddMarkerForm,
    TaskHeader,
    Footer,
    router
},
  data() {
    return {
      showAddTask: false,
      markers: [],
      showAddMarker: false
    }
  },
  methods:{
    toggleAddTaskForm(){
      this.showAddTask = !this.showAddTask
    },
    /*addMarker(newMarker){
      this.markers.push(newMarker)
      console.log(this.markers);
    },
    toggleAddMakerForm(){
      this.showAddMarker = !this.showAddMarker
    },*/
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