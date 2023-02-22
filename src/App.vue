<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => route.meta.layout || "DefaultLayout");
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>