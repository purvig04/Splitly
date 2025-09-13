<template>
  <div class="login">
    <form>
      <h1>Login Page</h1>
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button type="button" v-on:click="login">Login</button>
      <p>
        Don't have an account?<router-link to="/register">SignUp</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
