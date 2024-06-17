import { createApp, createElementBlock, render } from "vue"
import LoginProcessPage from "../components/LoginProcessPage.vue"
import RegisterProcessPage from "../components/RegisterProcessPage.vue"
import router from "../router/Router.js"

// Render form login
// const RenderLoginPage = createApp(LoginProcessPage)
// RenderLoginPage.use(router).mount("#container")

// Render form register
const RenderRegisterPage = createApp(RegisterProcessPage)
RenderRegisterPage.use(router).mount("#container")

// Render form register
// const RenderRegisterPage = createApp(RegisterProcessPage)
// RenderRegisterPage.use(router)
// RenderRegisterPage.mount("#RegisterPageContainer")