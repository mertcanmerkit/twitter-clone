<template>
  <div v-if="isMediaLtSm">
    <div @click="$router.back()" class="modal-fade"></div>
    <div class="modal">
      <a @click="$router.back()" class="text-link">Close</a>
      <AddNewTweetSection />
    </div>
  </div>
  <div v-else>
    <div>
      <a @click="$router.back()" class="text-link">Close</a>
      <AddNewTweetSection />
    </div>
  </div>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context.js';
import AddNewTweetSection from '@/components/shared/AddNewTweetSection.vue';

const isMediaLtSm = useMedia('lt-sm');
</script>

<style lang="scss" scoped></style>
