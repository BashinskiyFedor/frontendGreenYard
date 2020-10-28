import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import About from '../components/main/greenhouse/includes/about/About.vue'
import Blog from '../components/main/greenhouse/includes/blog/Blog.vue';
import Main from '../components/main/greenhouse/includes/main/Main.vue';
import Project from '../components/main/greenhouse/includes/project/Project.vue';
import Services from '../components/main/greenhouse/includes/services/Services.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  }


]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
