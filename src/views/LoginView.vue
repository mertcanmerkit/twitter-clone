<template>
  <div v-if="isMediaLtSm">
    <div v-if="isMediaLtSm" class="modal-fade"></div>
    <div class="modal">
      <router-link :to="{name: '/'}" class="text-link">Close</router-link>
      Login view
    </div>
  </div>
  <div v-else>
    <div>
      <router-link :to="{name: '/'}" class="text-link">Close</router-link>
      Login view
    </div>
  </div>
</template>

<script setup>
import { useMedia } from "@/js/helpers/window-context.js";

const isMediaLtSm = useMedia("lt-sm");
</script>

<style lang="scss" scoped>
</style>
