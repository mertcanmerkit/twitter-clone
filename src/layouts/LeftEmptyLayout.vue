<template>
  <BaseLayout>
    <template #layers>
      <MobileHeader />
      <MobileNavigation />
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import NavigationColumn from '@/components/navigation-column/NavigationColumn.vue';
import MobileHeader from '@/components/mobile/header/MobileHeader.vue';
import MobileNavigation from '@/components/mobile/navigation/MobileNavigation.vue';
</script>

<style lang="scss" scoped></style>
