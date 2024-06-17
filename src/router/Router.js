import { createRouter,createWebHistory } from "vue-router"
import LoginProcessPage from "../components/LoginProcessPage.vue"
import RegisterProcessPage from "../components/RegisterProcessPage.vue"

const routes = 
[
    // { 
    //     name: "LoginUser", 
    //     path: "/LoginUser", 
    //     component: LoginProcessPage
    // },
    // {   
    //     name: "RegisterUser",
    //     path: "/RegisterUser",
    //     component: RegisterProcessPage
    // }
    { 
        name: "LoginUser", 
        path: "/LoginUser", 
        component: () => import("../components/LoginProcessPage.vue")
    },
    {   
        name: "RegisterUser",
        path: "/RegisterUser",
        component: () => import("../components/RegisterProcessPage.vue")
    }
]

const router = createRouter({
    history: createWebHistory("/LoginUser"),
    // history: createWebHistory("/RegisterUser"),
    routes
})

export default router   