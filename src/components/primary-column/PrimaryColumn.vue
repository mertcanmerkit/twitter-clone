<template>
  <div class="primary-column">
    <router-link :to="{ name: ROUTE_CONSTANTS.LOGIN.NAME }"
      >Go to flowLogin
    </router-link>

    <Breadcrumb />
    <AddNewTweetSection v-if="!isMobile"/>
    <div style="height: 1px; background-color: rgb(47, 51, 54)"></div>
    <section role="region">
      <div aria-label="Timeline">
        <TweetSection v-for="n in 1" />
      </div>
    </section>
  </div>
</template>

<script setup>
import NewTweetButton from '@/components/shared/NewTweetButton.vue';
import AddNewTweetSection from '@/components/shared/AddNewTweetSection.vue';
import Breadcrumb from '@/components/shared/Breadcrumb.vue';
import { ROUTE_CONSTANTS } from '@/router/constants.js';
import TweetSection from '@/components/shared/TweetSection.vue';
import { useMedia } from '@/js/helpers/window-context.js';

const isMobile = useMedia('mobile');
</script>

<style scoped lang="scss">
.primary-column {
  width: 100%;
  max-width: 600px;
  background-color: $color-canvas-primary;
  border-top: 1px solid $color-border-primary;
  border-right: 1px solid $color-border-primary;
  border-left: 1px solid $color-border-primary;
}

.cell {
  width: 100%;
}

@include xxs {
  .primary-column {
    padding-bottom: $bottom-bar-height;
    border-left: unset;
    border-right: unset;
  }
}
</style>
