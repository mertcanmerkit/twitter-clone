<template>
  <router-link class="nav-item" :to="{ name: navRoute.name }">
    <div :class="{ logo: navRoute.name === ROUTE_CONSTANTS.BASE.NAME }">
      <NavigationBaseIcon
        :iconName="navRoute.meta.iconName"
        :navRouteName="navRoute.name"
        :handleExploreNavActive="handleExploreNavActive" />
      <div v-if="isMediaLtLg && navRoute.name !== ROUTE_CONSTANTS.BASE.NAME">
        <span
          :class="{ 'fw-bold': isActivePage || handleExploreNavActive }"
          class="fs-xl lh-lg">
          {{ navRoute.meta.displayName }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import NavigationBaseIcon from '@/components/navigation-column/ui/NavigationBaseIcon.vue';
import { computed, watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useMedia } from '@/js/helpers/window-context.js';
import { useStore } from 'vuex';
import { ROUTE_CONSTANTS } from '@/router/constants.js';

const route = useRoute();
const store = useStore();
const isActivePage = computed(() => route.name === props.navRoute.name);
const isMediaLtLg = useMedia('lt-lg');

const handleExploreNavActive = ref(false);

watchEffect(() => {
  handleExploreNavActive.value =
    route.name === ROUTE_CONSTANTS.BASE.NAME &&
    props.navRoute.name === ROUTE_CONSTANTS.EXPLORE.NAME &&
    !store.state.isAuth;
});

const props = defineProps({
  navRoute: {
    type: Object
  }
});
</script>

<style scoped lang="scss"></style>
