<template>
  <div class="nav">
    <router-link to="/" v-if="user">{{ user.name }}</router-link>
    <!-- <button v-on:click="logout" v-if="user">Logout</button> -->
    <a v-on:click="logout" v-if="user">Logout</a>

    <router-link to="/login" v-if="!user">Login</router-link>
    <router-link to="/register" v-if="!user">Sign up</router-link>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HeaderComp",
  props: {
    user: Object,
  },
  methods: {
    async logout() {
      try {
        const result = await axios.get("http://localhost:3000/api/logout", {
          withCredentials: true,
        });
        console.log(result);
        this.$router.push({ name: "Login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  padding: 16px 14px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}

.nav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>
