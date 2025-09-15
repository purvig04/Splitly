<template>
    <HeaderComp/>
    <h1>Landing Page</h1>
    <button class="addExpenses"><router-link to="/">Add Expenses</router-link></button>
</template>

<script>
import HeaderComp from './HeaderComp.vue';

export default {
    name:"LandingPage",
    components:{
        HeaderComp
    }
}
</script>

<style>
body{
    margin-top: 0;
}</style>