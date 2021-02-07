import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import About from '../components/main/greenhouse/includes/about/About.vue'
import Blog from '../components/main/greenhouse/includes/blog/Blog.vue';
import Main from '../components/main/greenhouse/includes/main/Main.vue';
import Project from '../components/main/greenhouse/includes/project/Project.vue';
import Services from '../components/main/greenhouse/includes/services/Services.vue';
import Contact from '../components/main/greenhouse/includes/contact/Contact.vue';
import Admin from '../components/main/blog/admin/Admin.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
