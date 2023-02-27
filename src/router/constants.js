const layouts = {
  default: 'DefaultLayout',
  leftEmptyLayout: 'LeftEmptyLayout',
  modalLayout: 'ModalLayout'
};
export const ROUTE_CONSTANTS = Object.freeze({
  BASE: {
    PATH: '/',
    NAME: '/',
    COMPONENT: 'HomeView',
    LAYOUT: layouts.default
  },
  HOME: {
    PATH: '/home',
    NAME: 'home',
    COMPONENT: 'HomeView',
    LAYOUT: layouts.default
  },
  EXPLORE: {
    PATH: '/explore',
    NAME: 'explore',
    COMPONENT: 'HomeView',
    LAYOUT: layouts.default
  },
  PROFILE: {
    PATH: '/profile',
    NAME: 'profile',
    COMPONENT: 'ProfileView',
    LAYOUT: layouts.default
  },
  SETTINGS: {
    PATH: '/settings',
    NAME: 'settings',
    COMPONENT: 'SettingsView',
    LAYOUT: layouts.leftEmptyLayout
  },
  ADD_NEW_TWEET: {
    PATH: '/compose/tweet',
    NAME: 'addNewTweet',
    COMPONENT: 'AddTweetView',
    LAYOUT: layouts.modalLayout
  },
  LOGIN: {
    PATH: '/i/flow/login',
    NAME: 'flowLogin',
    COMPONENT: 'LoginView',
    LAYOUT: layouts.modalLayout
  },
  NOT_FOUND: {
    PATH: '/:pathMatch(.*)*',
    NAME: 'not-found',
    COMPONENT: 'NotFoundView',
    LAYOUT: layouts.leftEmptyLayout
  },
  EMPTY: {
    COMPONENT: 'EmptyView'
  }
});
