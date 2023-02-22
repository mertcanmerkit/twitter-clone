import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfileView from '../views/ProfileView.vue';
import LoginView from '@/views/LoginView.vue';
import store from '@/store/index.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => {
        if (!store.state.isAuth) {
          return import('../views/HomeView.vue');
        }
      },
      beforeEnter: (to, from) => {
        // Just for auth test
        if (store.state.isAuth) {
          return { name: 'home' };
        }
      },
      meta: {
        layout: 'DefaultLayout',
        displayName: 'Logo',
        iconName: 'TwitterLogo',
        isInNavigationColumn: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'DefaultLayout',
        requiresAuth: true,
        displayName: 'Anasayfa',
        iconName: 'Home',
        isInNavigationColumn: true
      }
    },
    {
      path: '/explore',
      name: 'explore',
      component: HomeView,
      meta: {
        layout: 'DefaultLayout',
        displayName: 'Explore',
        iconName: 'Hashtag',
        isInNavigationColumn: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        layout: 'DefaultLayout',
        requiresAuth: true,
        displayName: 'Profil',
        iconName: 'User',
        isInNavigationColumn: true
      }
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: 'AuthLayout'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        layout: 'LeftEmptyLayout'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  }
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !store.state.isAuth) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    };
  }
});
export default router;
