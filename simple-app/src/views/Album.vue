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
        },
        getImage(car){
            const car_name_splited = car.name.split(' ')
            const car_year = car_name_splited[0]
            const car_name = car_name_splited.map((split_component) => split_component !== car_year ? split_component : null)
            car_name.shift()
            const car_name_string = car_name.join(" ")
            const image =  car_name_string + ' ' + car_year + ' ' + car.manufacturer 

            return "https://pic.mmowts.com/upload/image/FH4/" + image.toUpperCase()+ ".png"
        }

    },
    async created() {
        const res = await fetch("http://localhost:5000/cars")
        let data = await res.json()
        console.log(data)

        //data = data.map((car) => ({...car, image: this.getImage(car)}))

        let links_array = []
        for (let car in data){
            links_array.push(data[car].image)
        }

        console.log(links_array)

        this.carData = data.reduce((groups, item) => ({
            ...groups, [item.manufacturer]: [...(groups[item.manufacturer] || []), item]
        }), {});

        console.log(this.carData)
    }
}
</script>