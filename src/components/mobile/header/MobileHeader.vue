<template>
  <header v-if="isMobile" role="banner">
    <div>
      <div>AA</div>
    </div>
  </header>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context';

const isMobile = useMedia('mobile');
</script>

<style scoped lang="scss">
@import '@/styles/components/_header.scss';
header {
  @extend %header;
}
</style>
