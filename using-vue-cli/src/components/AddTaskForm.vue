<template>
    <form @submit="newTask($event)" class="add-task-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task">
        </div>
        <div class="form-control"> 
            <label>Date</label>
            <input type="date" v-model="date" name="date" placeholder="dd/mm/yyyy">
        </div>
        <div class="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>
        <input type="submit" value="Save Date" class="btn btn-block">
    </form>
</template>

<script>
export default {
    name:"AddTaskForm",
    data(){
        return {
            text: "",
            date: "",
            reminder: false
        }
    },
    methods:{
        newTask(e){
            e.preventDefault()
            
            if(!this.text){
                alert("add a task")
                return
            }

            if(!this.date){
                alert("add a date")
                return
            }

            const newT = {
                //id: Math.floor(Math.random() * 4352),
                text: this.text,
                date: this.date,
                reminder: this.reminder
            }

            this.$emit("add-task",newT)
        }
    },
    emits: ["add-task"]
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>