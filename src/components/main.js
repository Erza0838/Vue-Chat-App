import { createApp } from "vue"
import { createRouter,createWebHistory } from "vue-router"

import LoginProcessPage from "./LoginProcessPage.vue"
// import RegisterProcessPage from "./RegisterProcessPage.vue"

const RenderLoginPage = createApp(LoginProcessPage)
RenderLoginPage.mount("#container")

const router = createRouter({
    history: createWebHistory(),
    routePath:
    [
        {   
            path: "/LoginUser",
            name: "LoginPage",
            component: LoginProcessPage,
        },
        {
            path: "/RegisterUser",
            name: "RegisterPage",
            component: () => 
            {   
                import("./RegisterProcessPage.vue")
            }
        }
    ]
})

RenderLoginPage.use(router)