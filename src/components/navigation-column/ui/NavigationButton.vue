<template>
  <router-link class="nav-item" :to="{ name: navRoute.name }">
    <div>
      <IconComponent
        :iconName="navRoute.meta.iconName"
        :navRouteName="navRoute.name"
      />
      <div v-if="isMediaLtLg && navRoute.name !== '/'">
        <span :class="{'fw-bold': isActivePage}"
              class="nav-name fs-xl">
          {{ navRoute.meta.displayName }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import IconComponent from "@/components/navigation-column/ui/NavigationBaseIcon.vue";
import { useMedia } from "@/js/helpers/window-context.js";

const route = useRoute();
const isActivePage = computed(() => route.name === props.navRoute.name);
const isMediaLtLg = useMedia("lt-lg");

const props = defineProps({
  navRoute: {
    type: Object
  }
});
</script>

<style scoped lang="scss">
.nav-item {
  display: flex;
}

.nav-item > div {
  background: red;
  padding: 12px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
