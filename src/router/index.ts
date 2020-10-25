import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import About from '../components/main/greenhouse/includes/about/About.vue'
// import Blog from '../components/main/greenhouse/includes/blog/Blog.vue';
import Main from '../components/main/greenhouse/includes/main/Main.vue';
// import Project from '../components/main/greenhouse/includes/progect/Progect.vue';
// import Services from '../components/main/greenhouse/includes/services/Services.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
