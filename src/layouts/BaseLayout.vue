<template>
  <div>
    <div id="layers" style="display: inline" v-if="$route.name !== 'flowLogin'">
      <slot name="layers"></slot>
    </div>
    <div class="container">
      <NavigationColumn />
      <main role="main">
        <div class="content">
          <div class="content-container">
            <router-view class="Base1" style="display: contents"></router-view>
            <router-view
              class="previousfromBase"
              name="previous"
              v-if="!isMobile"></router-view>
            <slot name="content"></slot>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import NavigationColumn from '@/components/navigation-column/NavigationColumn.vue';
import { useMedia } from '@/js/helpers/window-context.js';

const isMobile = useMedia('mobile');
</script>

<style lang="scss"></style>
