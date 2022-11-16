<template>
    <div class="sticky-top album py-5 bg-light">
        <div class="container">
            <input v-model="inputData" type="text" class="form-control" placeholder="Search">
            <!-- <div v-for="manufac, key in CarSearch()" :key="key" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col-md-12 col-sm-12 mt-5">
                    <h2>{{key}}</h2>
                    <h2>{{manufac}}</h2>
                </div>
                <Card :key="car.id" v-for="car in manufac" :car_info="car"></Card>
            </div> -->

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Card :key="car.id" v-for="car in CarSearch()" :car_info="car"></Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
    name:"Album",
    components: {
        Card
    },
    props:{
        carData: Array
    },
    data(){
        return {
            inputData: ""
        }
    },
    methods:{
        CarSearch(){
            /* TODO: fault in search is making so it sometimes displays repeated cars and wrong cars too */
            return this.carData.filter((car) => car.name.toLowerCase().includes(this.inputData))
            /* return this.carData.filter((car_manu) => car_manu.includes(this.inputData)) */
        }
    }
}
</script>