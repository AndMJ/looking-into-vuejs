<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card shadow-sm">
            <div class="card-header">
                <h5 @mousedown="on_ip_copy_color='green', copy(car_info.id)" @mouseup="on_ip_copy_color='unset'" class="card-title" :style="{color: on_ip_copy_color, cursor: 'pointer'}">ID: <strong>{{car_info.id}}</strong></h5>
            </div>
            <!-- <img src="../assets/car_thumb.png" class="card-img-top" alt="Car photo"> -->
            
            <div class="card-body">
                <h5 class="card-title">{{car_info.manufacturer}}</h5>
                <p class="card-text">{{car_info.name}}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">{{car_info.type}}</small>
                </div>
            </div>
            <!-- TODO: create fetch to json-server to get images, for status code filtering -->
            <img :src="[car_info.image ? 'http://localhost:5000' + car_info.image : require('@/assets/car_thumb.png')]" class="card-img-top" alt="Car photo">
        </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        car_info: Object,
        on_ip_copy_color: String
    },
    methods:{
        copy(id) {
            navigator.clipboard.writeText(id);
        }
    }
}
</script>