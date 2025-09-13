<template>
<div class="login">
    <form>

        <h2>Login Page</h2>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <div class="error" v-if="errors && errors.email">{{ errors.email }}</div>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <div class="error" v-if=" errors && errors.password">{{ errors.password }}</div>

        <button type="button" @click="login">Login</button>

        <p>
            Don't have an account?
            <router-link to="/register">Register</router-link>
        </p>
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: "",
            errors:{}
        };
    },
    methods: {

async login() {
    try {
        const result = await axios.post("http://localhost:3000/api/login", {
        email: this.email,
            password: this.password
        }, {
            withCredentials: true
        })
        console.log(result.data);
        
      this.$router.push({name:'Home'})
    
    } catch (err) {
      console.log(err);
      
        this.errors = err.response.data.errors;
        console.log(this.errors)

    }


}
}
};
</script>
