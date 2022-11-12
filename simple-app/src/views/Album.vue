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
    data(){
        return {
            carData: [],
            car_manu: []
        }
    },
    methods:{
        groupBy(collection, property) {
            var i = 0, val, index, values = [], result = [];
            for (; i < collection.length; i++) {
                val = collection[i][property];
                index = values.indexOf(val);
                
                if (index > -1)
                    result[val].push(collection[i]); 
                else {     
                    values.push(val);    
                    result[val] = [];      
                    result[val].push([collection[i]]); 
                }
            }
            return result;
        }

    },
    async created() {
        const res = await fetch("http://localhost:5000/cars")
        const data = await res.json()
        console.log(data);

        this.carData = data.reduce((groups, item) => ({
            ...groups, [item.manufacturer]: [...(groups[item.manufacturer] || []), item]
        }), {});

        console.log(this.carData);
    }
}
</script>