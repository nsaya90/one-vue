import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfilView from "../views/ProfilView.vue";
import EditView from "../views/EditView.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/profil",
    name: "profil",
    component: ProfilView,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/edit",
    name: "edit",
    component: EditView,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
