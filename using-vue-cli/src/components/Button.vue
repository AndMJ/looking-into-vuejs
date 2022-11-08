<template>
    <button @click="clickFunction($event)" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        color: String,
        text: String
    },
    methods: {
        clickFunction(e) {
            console.log(e.target.title)
        }
    }
}
</script>