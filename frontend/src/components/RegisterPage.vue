<template>
<div class="register">
    <form>
        <h2>Register Page</h2>

        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
        <div class="error" v-if="errors.name">{{ errors.name }}</div>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <div class="error" v-if="errors.email">{{ errors.email }}</div>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <div class="error" v-if="errors.password">{{ errors.password }}</div>

        <button type="button" @click="register">Register</button>

        <p>
            Already have an account?
            <router-link to="/login">Login</router-link>
        </p>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "RegisterPage",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errors: {}
        }
    },
    methods: {

        async register() {
            try {
                const result = await axios.post("http://localhost:3000/api/register", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }, {
                    withCredentials: true
                })
                console.log(result.data);
                if(result.status==201){
              this.$router.push({name:'Home'})
            }

            } catch (err) {
                this.errors = err.response.data.errors;
                console.log(this.errors)

            }
     

        }
    }
}
</script>
