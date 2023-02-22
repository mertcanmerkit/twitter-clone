import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfileView from '../views/ProfileView.vue';
import LoginView from '@/views/LoginView.vue';
import SettingsView from '@/views/SettingsView.vue';
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
        requiresAuth: false,
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
        requiresAuth: true,
        layout: 'DefaultLayout',
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
        requiresAuth: false,
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
        requiresAuth: true,
        layout: 'DefaultLayout',
        displayName: 'Profil',
        iconName: 'User',
        isInNavigationColumn: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout'
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: {
        requiresAuth: false,
        layout: 'LeftEmptyLayout',
        displayName: 'Settings',
        iconName: 'Settings',
        isInNavigationColumn: true,
        isGuestOnly: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        requiresAuth: false,
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
