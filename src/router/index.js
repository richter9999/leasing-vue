import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login'),
		hidden: true,
	},
	{
		path: '/403',
		name: '403',
		component: () => import('@/views/403'),
		hidden: true,
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/404'),
		hidden: true,
	},
]

export const asyncRoutes = [

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router
