<template>
    <div id="map" style="width: auto; height: 400px;"></div>
</template>


<script>
/* TODO: add marker to map*/
export default {
    name:"Map",
    props:{
        markers: Array
    },
    data(){
        return {
            center: [51.505, -0.09],
            map: null
        }
    },
    methods:{
        setupLeafletMap(){
            const map = L.map('map').setView(this.center, 11)
            
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            this.map = map
        },
        loadAllMarkers(){
            for (let i in this.markers){
                let newMarker = L.marker([this.markers[i].pos.lat,this.markers[i].pos.long]).addTo(this.map).bindPopup(this.markers[i].text) 
                /*console.log(this.markers[i].pos.lat);*/
            }
        }
    },
    mounted(){
        this.setupLeafletMap()

        this.loadAllMarkers()
    }
}
</script>