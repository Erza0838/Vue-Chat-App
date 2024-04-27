<template>
    <h1 class="text-center text-white text-base mb-8"> 
        Halaman login
    </h1>
    <div class="sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div class="inline-block bg-white p-11">
                <form method="post" class="sm:flex sm:flex-col sm:items-center sm:justify-center sm:justify-items-center gap-5">
                <label for="" class="text-left">Masukkan email</label>
                <input 
                    type="text"    
                    v-model="EmailModel"
                    class="bg-silver text-white opacity-85 w-56 py-2 px-1" 
                    required>

                <label for="" class="text-left">Masukkan password</label>
                <input 
                    type="password"   
                    v-model="PasswordModel"
                    class="bg-silver text-white opacity-85 w-56 py-2 px-1"
                    required>

                <div class="flex flex-row row-span-1 gap-2">
                    <!-- <button class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md" @click="activeComp = 'User-Login'">Login</button>
                    <button class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md" @click="activeComp = 'User-Register'">register</button> -->    
                    <router-link class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md" to="/">Login</router-link> 
                    <router-link class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md" to="/RegisterUser">Register</router-link>
                </div>
                <router-view></router-view>
                <!-- <RouterLink to="/RegisterProcess">
                    <p class="cursor-pointer text-sky-500">
                        Jika belum punya akun register dahulu
                    </p>
                </RouterLink>
                <RouterView/> -->
                </form>
            </div>
      </div>
</template>

<!-- <script> 
export default 
{   
    data()
    {   
        return 
        {
            EmailModel : null,
            PasswordModel :  null     
        }
    },
}
</script> -->

<!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js">
  const app = Vue.createApp({
    data() {
      return {
        EmailModel: null,
        PasswordModel: null
      }
    }
  })
  app.mount('#app')
</script> -->