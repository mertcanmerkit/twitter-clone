<template>
  <div
    class="new-tweet-btn"
    :class="{
      icon: isBtnIcon || (isInNavigationSection && !isMediaLtLg),
      nav: isInNavigationSection,
      disable: isSendBtnDisable
    }">
    <router-link to="/">
      <div v-if="isBtnIcon || (isInNavigationSection && !isMediaLtLg)">
        <Icon.NewTweet />
      </div>
      <div v-else>
        <span>Tweetle</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context.js';
import * as Icon from '@/components/icons/utils/icon-components';

const isMediaLtLg = useMedia('lt-lg');

const props = defineProps({
  isBtnIcon: {
    type: Boolean,
    default: false
  },
  isInNavigationSection: {
    type: Boolean,
    default: false
  },
  isSendBtnDisable: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped lang="scss"></style>
