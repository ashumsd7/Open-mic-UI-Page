import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import Feedback from './components/Feedback.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/feedback", component: Feedback },

    { path: "/:notFound(.*)", component: HomePage },
  ],
});

export default router;