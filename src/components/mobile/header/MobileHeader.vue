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
header {
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  padding: 1rem;
  backdrop-filter: blur(12px);
  background-color: rgba(0, 0, 0, 0.65);
}
</style>
