<template>
  <div v-if="isMediaLtSm">
    <div @click="$router.back()" class="modal-fade"></div>
    <div class="modal">
      <a @click="$router.back()" class="text-link">Close</a>
      Login view
    </div>
  </div>
  <div v-else>
    <div>
      <a @click="$router.back()" class="text-link">Close</a>
      Login view
    </div>
  </div>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context.js';

const isMediaLtSm = useMedia('lt-sm');
</script>

<style lang="scss" scoped></style>
