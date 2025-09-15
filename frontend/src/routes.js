import {createWebHistory,createRouter} from "vue-router";
import  LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import HomePage from "./components/HomePage.vue";
import LandingPage from "./components/LandingPage.vue";

const routes = [
  { name: "Login", path: "/login", component: LoginPage },
  { name: "Register", path: "/register", component: RegisterPage },
  {
    name: "Home",
    path: "/",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  { name: "Landing", path: "/landing", component: LandingPage },
];

const router= createRouter({history:createWebHistory() ,routes})

export default router;