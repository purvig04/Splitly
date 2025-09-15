<template>
    <HeaderComp :user="user"/>
    <h1>Landing Page</h1>
    <button class="addExpenses"><router-link to="/">Add Expenses</router-link></button>
</template>

<script>
import HeaderComp from './HeaderComp.vue';
import axios from 'axios';

export default {
    name:"LandingPage",
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
      }
    }
  },
}
</script>

<style>
body{
    margin-top: 0;
}</style>