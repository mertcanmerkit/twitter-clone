<template>
  <div class="breadcrumb" v-if="$route.meta.displayName && !isMobile">
    <h2 class="fs-xl lh-xl">{{ $route.meta.displayName }}</h2>
  </div>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context';

const isMobile = useMedia('mobile');
</script>

<style lang="scss" scoped>
@import '@/styles/components/_header.scss';
.breadcrumb {
  @extend %header;
}
</style>
