import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index.js';
import { ROUTE_CONSTANTS } from '@/router/constants.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_CONSTANTS.BASE.PATH,
      name: ROUTE_CONSTANTS.BASE.NAME,
      beforeEnter: (to, from) => {
        to.matched[0].components = {
          default: import(`@/views/${ROUTE_CONSTANTS.BASE.COMPONENT}.vue`)
        };
        // Just for auth test
        if (store.state.isAuth) {
          return { name: ROUTE_CONSTANTS.HOME.NAME };
        }
      },
      meta: {
        requiresAuth: false,
        layout: 'DefaultLayout',
        displayName: 'Home',
        iconName: 'TwitterLogo',
        isInNavigationColumn: true
      }
    },
    {
      path: ROUTE_CONSTANTS.HOME.PATH,
      name: ROUTE_CONSTANTS.HOME.NAME,
      component: () => import(`@/views/${ROUTE_CONSTANTS.HOME.COMPONENT}.vue`),
      meta: {
        requiresAuth: true,
        layout: ROUTE_CONSTANTS.HOME.LAYOUT,
        displayName: 'Home',
        iconName: 'Home',
        isInNavigationColumn: true,
        isSupportModalView: true
      }
    },
    {
      path: ROUTE_CONSTANTS.EXPLORE.PATH,
      name: ROUTE_CONSTANTS.EXPLORE.NAME,
      component: () =>
        import(`@/views/${ROUTE_CONSTANTS.EXPLORE.COMPONENT}.vue`),
      meta: {
        requiresAuth: false,
        layout: ROUTE_CONSTANTS.EXPLORE.LAYOUT,
        displayName: 'Explore',
        iconName: 'Hashtag',
        isInNavigationColumn: true
      }
    },
    {
      path: ROUTE_CONSTANTS.PROFILE.PATH,
      name: ROUTE_CONSTANTS.PROFILE.NAME,
      component: () =>
        import(`@/views/${ROUTE_CONSTANTS.PROFILE.COMPONENT}.vue`),
      meta: {
        requiresAuth: true,
        layout: ROUTE_CONSTANTS.PROFILE.LAYOUT,
        displayName: 'Profil',
        iconName: 'User',
        isInNavigationColumn: true,
        isSupportModalView: true
      }
    },
    {
      path: ROUTE_CONSTANTS.SETTINGS.PATH,
      name: ROUTE_CONSTANTS.SETTINGS.NAME,
      component: () =>
        import(`@/views/${ROUTE_CONSTANTS.SETTINGS.COMPONENT}.vue`),
      meta: {
        requiresAuth: false,
        layout: ROUTE_CONSTANTS.SETTINGS.LAYOUT,
        displayName: 'Settings',
        iconName: 'Settings',
        isInNavigationColumn: true,
        isGuestOnly: true,
        isSupportModalView: true
      }
    },
    {
      path: ROUTE_CONSTANTS.ADD_NEW_TWEET.PATH,
      name: ROUTE_CONSTANTS.ADD_NEW_TWEET.NAME,
      meta: {
        requiresAuth: true,
        layout: ROUTE_CONSTANTS.ADD_NEW_TWEET.LAYOUT
      },
      beforeEnter: (to, from, next) => {
        handleModalRoute(
          to,
          from,
          next,
          ROUTE_CONSTANTS.ADD_NEW_TWEET.COMPONENT
        );
      }
    },
    {
      path: ROUTE_CONSTANTS.LOGIN.PATH,
      name: ROUTE_CONSTANTS.LOGIN.NAME,
      meta: {
        requiresAuth: false,
        layout: ROUTE_CONSTANTS.LOGIN.LAYOUT
      },
      beforeEnter: (to, from, next) => {
        handleModalRoute(to, from, next, ROUTE_CONSTANTS.LOGIN.COMPONENT);
      }
    },
    {
      path: ROUTE_CONSTANTS.NOT_FOUND.PATH,
      name: ROUTE_CONSTANTS.NOT_FOUND.NAME,
      component: () =>
        import(`@/views/${ROUTE_CONSTANTS.NOT_FOUND.COMPONENT}.vue`),
      meta: {
        requiresAuth: false,
        layout: ROUTE_CONSTANTS.NOT_FOUND.LAYOUT
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
      path: ROUTE_CONSTANTS.LOGIN.PATH,
      query: { redirect: to.fullPath }
    };
  }
});

function handleModalRoute(to, from, next, component) {
  const isPreviousRouteSupportModalView =
    (from.matched[0] ? from.matched[0].meta.isSupportModalView : false) ===
    true;

  to.matched[0].components = {
    default: () => import(`@/views/${component}.vue`),
    previous: () => import(`@/views/${ROUTE_CONSTANTS.EMPTY.COMPONENT}.vue`)
  };

  if (from.matched.length > 0 && isPreviousRouteSupportModalView) {
    to.matched[0].components = {
      default: () => import(`@/views/${component}.vue`),
      previous: () =>
        import(`@/views/${from.matched[0].components.default.__name}.vue`)
    };
    to.meta.layout = from.matched[0].meta.layout;
    to.meta.displayName = from.matched[0].meta.displayName;
  }

  next();
}

export default router;
