<template><h1>Home page</h1></template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
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
