<template>
  <BaseLayout v-if="isMediaLtSm">
    <template #layers>
      <MobileHeader />
      <MobileNavigation />
    </template>
    <template #navigation>
      <NavigationColumn />
    </template>
    <template #content>
      <PrimaryColumn />
      <LoginView />
      <SidebarColumn />
    </template>
  </BaseLayout>
  <LoginView v-else />
</template>

<script setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
import SidebarColumn from "@/components/sidebar-column/SidebarColumn.vue";
import NavigationColumn from "@/components/navigation-column/NavigationColumn.vue";
import MobileHeader from "@/components/mobile/header/MobileHeader.vue";
import MobileNavigation from "@/components/mobile/navigation/MobileNavigation.vue";
import PrimaryColumn from "@/components/primary-column/PrimaryColumn.vue";
import LoginView from "@/views/LoginView.vue";
import { useMedia } from "@/js/helpers/window-context.js";

const isMediaLtSm = useMedia("lt-sm");
</script>

<style lang="scss">
</style>
