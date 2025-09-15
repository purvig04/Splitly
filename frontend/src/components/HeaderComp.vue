<template>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Sign up</router-link>
    
      <!-- <a v-on:click="logout" href="#">Logout</a> -->
    </div>
  </template>
  <script>
  // import axios from 'axios';
  export default {
    name: "HeaderComp",
    methods: {
      
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