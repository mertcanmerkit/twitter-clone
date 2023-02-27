<template>
  <div>
    <div>
      <router-link :to="{ name: 'flowLogin' }">Go to flowLogin</router-link>
      <h1>Profile</h1>
      <Icon.Bell></Icon.Bell>
    </div>
  </div>
</template>

<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
</script>

<style scoped lang="scss"></style>
