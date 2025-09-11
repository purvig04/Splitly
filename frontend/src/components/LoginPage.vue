<template>

<h1>Login Page</h1>
<div class="login">
  <input type="text" v-model="email" placeholder="Enter Email" />
  <input type="password" v-model="password" placeholder="Enter Password" />
  <button type="submit" v-on:click="login">Login</button>
  <p><router-link to="/register">SignUp</router-link></p>
</div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return{
        email:'',
        password:''
    }
  },
}
</script>