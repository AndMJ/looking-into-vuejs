<template>
    <l-map style="width: auto;height: 400px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="marker, index in markers" :lat-lng="marker"></l-marker>
    </l-map>
</template>


<script>
import "leaflet/dist/leaflet.css"
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
    name:"Map",
    components: {
        LMap,
        LMarker,
        LTileLayer
    },
    data(){
        return {
            zoom: 11,
            center: [51.505, -0.09],
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            markers: [
                [51.5, -0.09],
                [51.8, -0.0955]
            ]


        }
    },
    methods:{
        /*setupLeafletMap(){
            const map = L.map('map').setView(this.center, 11)
            
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            this.map = map
        },
        loadAllMarkers(){
            for (let i in this.markers){
                let newMarker = L.marker([this.markers[i].pos.lat,this.markers[i].pos.long]).addTo(this.map).bindPopup(this.markers[i].text) 
            }
        }*/
    }
}
</script>