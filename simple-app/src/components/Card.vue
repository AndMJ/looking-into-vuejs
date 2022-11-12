<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card shadow-sm">
            <div class="card-header">
                <h5 @mousedown="on_ip_copy_color='green', copy(car_info.id)" @mouseup="on_ip_copy_color='unset'" class="card-title" :style="{color: on_ip_copy_color, cursor: 'pointer'}">ID: {{car_info.id}}</h5>
            </div>
            <!-- <img src="../assets/car_thumb.png" class="card-img-top" alt="Car photo"> -->
            <img :src="[car_info.image ? car_info.image : '../assets/car_thumb.png']" class="card-img-top" alt="Car photo">
            <div class="card-body">
                <h5 class="card-title"><strong>{{car_info.manufacturer}}</strong></h5>
                <p class="card-text">{{car_info.name}}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">{{car_info.type}}</small>
                </div>
            </div>
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