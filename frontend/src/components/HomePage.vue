<template><h1>Home page</h1>
  <button v-on:click="logout">Logout</button></template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
  methods:{
    async logout() {
        try{
          const result= await axios.get("http://localhost:3000/api/logout",{withCredentials: true})
          console.log(result);
          this.$router.push({name:"Login"})
        }
       catch(err){
        console.log(err);
        
       }
      
      },
  },
  async mounted() {
    try {
      const result = await axios.get("http://localhost:3000/api/home",{ withCredentials: true});
      console.log(result);

    } catch (err) {
      if (err.response && err.response.status === 401) {
        this.$router.push("/login");
      }
    }
  },
};
</script>
