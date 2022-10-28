import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("views/home/HomeView.vue");
const About = () => import("views/about/AboutView.vue");
const Profile = () => import("../views/profile/ProfileView.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
