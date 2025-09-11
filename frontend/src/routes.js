import {createWebHistory,createRouter} from "vue-router";
import  LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";

const routes = [
  { name: "Login", path: "/login", component: LoginPage },
  { name: "Register", path: "/register", component: RegisterPage },
];

const router= createRouter({history:createWebHistory() ,routes})

export default router;