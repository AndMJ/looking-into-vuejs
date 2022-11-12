<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div v-for="manufac, key in carData" :key="key" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col-md-12 col-sm-12 mt-5">
                    <h2>{{key}}</h2>
                </div>
                <Card :key="car.id" v-for="car in manufac" :car_info="car"></Card>
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
        carData: Object
    }
}
</script>