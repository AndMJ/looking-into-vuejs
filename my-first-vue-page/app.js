const app = Vue.createApp({
    data(){
        return {
            name: "Joaquim",
            gender: "male",
            age:"28",
            email: "joaquim@email.com",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        }
    },
    methods:{
        async getUser(){
            const res = await fetch("https://randomuser.me/api")
            const { results }  = await res.json()

            console.log(results)
            this.name = results[0].name.first + " " + results[0].name.last
            this.gender = results[0].gender
            this.age = results[0].dob.age
            this.email = results[0].email
            this.image = results[0].picture.large
        }
    }
})

app.mount("#app")