import { RouterLink } from 'vue-router';

import { RouterView } from 'vue-router';

<template>
    <h1 class="text-center text-white text-base mb-8"> 
        Halaman login
    </h1>
    <div class="sm:flex sm:flex-col sm:items-center sm:justify-center mt-28">
            <div class="inline-block bg-white p-11">
                <form method="post"class="sm:flex sm:flex-col sm:items-center sm:justify-center sm:justify-items-center gap-5">
                    <label for="" class="text-left">Masukkan email</label>
                    <input 
                        type="text"    
                        class="bg-silver text-white opacity-85 w-56 py-2 px-1" 
                        required
                        autocomplete="off"
                        v-model="InputExistEmail">

                    <label for="" class="text-left">Masukkan password</label>
                    <input 
                        type="password"   
                        class="bg-silver text-white opacity-85 w-56 py-2 px-1"
                        required
                        autocomplete="off"
                        v-model="InputExistPassword">

                    <div class="flex flex-row row-span-1 gap-2">
                        <RouterLink class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md" to="/LoginUser">
                            Login
                        </RouterLink>
                        <RouterLink class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md " to="/RegisterUser">
                            Register
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
        <RouterView></RouterView>
</template>

<script>
export default {
    data() {
        return {
            InputExistEmail: "",
            InputExistPassword: ""
        }
    }
}
</script>