<template>
    <form @submit="newMarker($event)" class="add-marker-form">
        <div class="form-control">
            <label>Marker text</label>
            <input type="text" v-model="popup_text" name="text" placeholder="Marker text">
        </div>
        <div class="form-control">
            <label>Lat-Long</label>
            <input type="text" v-model="marker_lat" name="text" placeholder="lat">
            <input type="text" v-model="marker_long" name="text" placeholder="long">
        </div> 
        <input type="submit" value="Save Marker" class="btn btn-block">
    </form>
</template>

<script>
export default {
    name:"AddMarkerForm",
    data(){
        return {
            popup_text: null,
            marker_lat: null,
            marker_long: null
        }
    },
    methods:{
        newMarker(e){
            e.preventDefault()

            const newMarker = {
                id: Math.floor(Math.random() * 3425),
                text: this.popup_text,
                pos: {
                    lat: Number(this.marker_lat),
                    long: Number(this.marker_long)
                }
            }

            this.$emit("map-add-marker", newMarker)
        }
    },
    emits:["map-add-marker"]
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