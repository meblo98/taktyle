import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailView from '../views/BlogDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/solution',
      name: 'solution',
      component: () => import('../views/SolutionView.vue'),
    },
    {
      path: '/candidature',
      name: 'candidature',
      component: () => import('../views/CandidatureView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Admin/LoginView.vue'),
    },
    {
      path: '/blog/:id',  // Route pour la page de détail d'un blog
      name: 'blog-detail',
      component: BlogDetailView,
      props: true,  // Permet de passer l'ID comme prop à la vue
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/AdminView.vue'),
      beforeEnter: (to, from, next) => {
        // Vérifie si le token existe dans le localStorage
        const token = localStorage.getItem('token')
        if (token) {
          next()  // L'utilisateur peut accéder à la route
        } else {
          next({ name: 'login' })  // Redirige vers la page de login si pas de token
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
})

export default router
