// import { createApp } from "vue"
// import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { createRouter,createWebHistory } from "vue-router"

// import { Register } from "../components/RegisterProcessPage.vue"
// import { Login } from "../components/LoginProcessPage.vue"

const routes = 
[
    {path: "/Home", name: "Home", component: () => "./components/LoginProcessPage.vue"},
    {path: "/Register", name: "Register", component: () => "./components/RegisterProcessPage.vue"},
    // {path: "/Home", name: "home", component: Login},
    // {path: "/Register", name: "Register", component: Register}
]

const router = createRouter({
    routes,
    history: createWebHistory("/Home")
})

export default router