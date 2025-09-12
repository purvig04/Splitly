<template>

<h1>Register Page</h1>
<div class="register">
  <input type="text" v-model="email" placeholder="Enter Email" />
  <input type="password" v-model="password" placeholder="Enter Password" />
  <button type="submit" v-on:click="login">Register</button>
  <p><router-link to="/login">Login</router-link></p>
</div>
</template>

<script>
export default {
  name: "RegisterPage",
  data(){
    return{
        email:'',
        password:''
    }
  },
}
</script>