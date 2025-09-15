<template>
<HeaderComp :user="user"/>
<h1>Home page</h1>

  </template>
<script>
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";
export default {
  name: "HomePage",
  components:{
    HeaderComp
  },
  data(){
    return{
      user:null
    }
  },

  async mounted() {
    try {
      const result = await axios.get("http://localhost:3000/api/home",{ withCredentials: true});
  
      this.user=result.data.user

    } catch (err) {
      if (err.response && err.response.status === 401) {
        this.user=null
        this.$router.push("/login");
      }
    }
  },
};
</script>
