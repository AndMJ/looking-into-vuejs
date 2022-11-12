import {createRouter, createWebHistory} from "vue-router"

// import views
import Album from "../views/Album"
import About from "../views/About"

//create routes array
const routes = [
    {
        path:"/",
        name:"Album",
        component: Album
    },
    {
        path:"/About",
        name:"About",
        component: About
    }
]

//create the router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//export router
export default router