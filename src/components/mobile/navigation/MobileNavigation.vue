<template>
  <div v-if="isMobile" class="bottom-bar">
    <div class="floating-action-button-base">
      <aside>
        <NewTweetButton class="float-action-btn" isBtnIcon />
      </aside>
    </div>
    <div class="navigation">
      <nav>
        <router-link to="/about">Main</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import NewTweetButton from '@/components/shared/NewTweetButton.vue';
import { useMedia } from '@/js/helpers/window-context';

const isMobile = useMedia('mobile');
</script>

<style scoped lang="scss">
.navigation {
  pointer-events: auto;
}

.floating-action-button-base {
  pointer-events: none;
}

.bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

.navigation {
  height: $bottom-bar-height;
  background-color: rgb(0, 0, 0);
}

aside {
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
</style>
