<template>
  <div>
    <div>
      <router-link :to="{ name: ROUTE_CONSTANTS.LOGIN.NAME }"
        >Go to flowLogin</router-link
      >
      <h1>Settings View</h1>
    </div>
  </div>
</template>

<script>
import { ROUTE_CONSTANTS } from '@/router/constants.js';
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    ROUTE_CONSTANTS() {
      return ROUTE_CONSTANTS;
    }
  }
});
</script>

<style lang="scss" scoped></style>
