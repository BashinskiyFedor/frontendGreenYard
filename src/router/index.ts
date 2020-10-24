import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import About from '../components/main/greenhouse/includes/about/About.vue';
import Blog from '../components/main/greenhouse/includes/blog/Blog.vue';
import Main from '../components/main/greenhouse/includes/main/Main.vue';
import Project from '../components/main/greenhouse/includes/progect/Progect.vue';
import Services from '../components/main/greenhouse/includes/services/Services.vue';

const routes: Array<RouteRecordRaw> = [
{
	path: '/about',
	name: 'About',
	component: About
},
{
	path: '/about',
	name: 'About',
	component: About
},
{
	path: '/about',
	name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '../components/main/greenhouse/includes/about/About.vue')
}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router