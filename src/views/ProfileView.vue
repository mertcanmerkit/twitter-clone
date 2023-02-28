<template>
  <div>
    <div>
      <router-link :to="{ name: ROUTE_CONSTANTS.LOGIN.NAME }"
        >Go to flowLogin</router-link
      >
      <h1>Profile</h1>
      <Icon.Bell></Icon.Bell>
    </div>
  </div>
</template>

<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
import { ROUTE_CONSTANTS } from '@/router/constants.js';
</script>

<style scoped lang="scss"></style>
