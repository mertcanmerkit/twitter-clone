<template>
  <div>
    <div
      id="layers"
      style="display: inline"
      v-if="
        $route.name !== ROUTE_CONSTANTS.LOGIN.NAME &&
        $route.name !== ROUTE_CONSTANTS.ADD_NEW_TWEET.NAME
      ">
      <slot name="layers"></slot>
    </div>
    <div class="container">
      <NavigationColumn />
      <main role="main">
        <div class="content">
          <div class="content-container">
            <router-view class="primary-layout"></router-view>
            <router-view
              class="previous-layout"
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
import { ROUTE_CONSTANTS } from '@/router/constants.js';

const isMobile = useMedia('mobile');
</script>

<style lang="scss">
.primary-layout {
  display: contents;

  @include xxs {
    display: block;
    width: 100%;
  }
}

.previous-layout {
  width: 100%;
  max-width: 600px;
}
</style>
