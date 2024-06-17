import { RouterLink } from 'vue-router';

import { RouterView } from 'vue-router';

<template>
    <h1 class="text-center text-white text-base mb-5"> 
        Halaman register
    </h1>
    <div class="sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div class="inline-block bg-white p-11">
                <form method="post" @submit.prevent="SendNewAccountData" class="sm:flex sm:flex-col sm:items-center sm:justify-center sm:justify-items-center gap-4">
                    <label class="text-left">Jenis kelamin</label>
                    <select required class="bg-silver text-white opacity-85 w-56 py-2 px-1" v-model="InputGender" aria-required="true">
                        <option>Laki - laki</option>
                        <option>Perempuan</option>
                    </select>

                    <label class="text-left">Masukkan nama</label>
                    <input type="text" name="InputName" id="" class="bg-silver text-white opacity-85 w-56 py-2 px-1" v-model="InputName" required>

                    <label class="text-left">Masukkan email</label>
                    <input type="text" name="InputEmail" id="" class="bg-silver text-white opacity-85 w-56 py-2 px-1" v-model="InputEmail" required>

                    <label class="text-left">Masukkan password</label>
                    <input type="password" name="InputPassword" id="" class="bg-silver text-white opacity-85 w-56 py-2 px-1" v-model="InputPassword" required>

                    <button @click="SendNewAccountData" class="p-1 px-6 bg-silver opacity-85 text-white font-medium rounded-md" to="/LoginUser" type="submit">Login</button>
                </form>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            InputGender : "",
            InputName : "",
            InputEmail : "",
            InputPassword: "",
            data: null
        }
    },
    methods: 
    {   
        async SendNewAccountData() 
        {   
            const InputData = 
            {   
                Genders: this.InputGender,
                Username: this.InputName,
                Email: this.InputEmail,
                Password: this.InputPassword
            }
            try 
            {
                await fetch("http://localhost:3000/api/User/Register", 
                {
                    method: "POST",
                    headers : 
                    {   
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "charset":"utf-8"
                    },
                    body: JSON.stringify(InputData)
                })
                .then(response => response.json())
                .then(data => (data = InputData))
                .catch(error => console.log(error))
            } 
            catch (error)
            {
                console.log(error)    
            }
        }
    }
}
</script>   