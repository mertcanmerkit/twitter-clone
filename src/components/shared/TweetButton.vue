<template>
  <router-link class="tweet-button" to="#">
    <div>
      <component :is="icons[mIconName]"></component>
    </div>
    <div v-if="count">
      <span class="fs-sm lh-sm">{{ count }}</span>
    </div>
  </router-link>
</template>
<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
import { ref } from 'vue';

const props = defineProps(['iconName', 'count']);

const mIconName = ref('');
mIconName.value = props.iconName;

const Comments = Icon.Comments;
const Retweet = Icon.Retweet;
const Heart = Icon.Heart;
const Interaction = Icon.Interaction;
const Share = Icon.Share;
const ThreeDot = Icon.ThreeDot;

const icons = {
  Comments,
  Retweet,
  Heart,
  Interaction,
  Share,
  ThreeDot
};
</script>
<style lang="scss" scoped>
.tweet-button:nth-child(1):hover,
.tweet-button:nth-child(4):hover,
.tweet-button:nth-child(5):hover {
  > :first-child {
    background-color: $color-hover-highlight;

    svg {
      color: $color-text-link;
    }
  }

  span {
    color: $color-text-link;
  }
}

.tweet-button:nth-child(2):hover {
  > :first-child {
    background-color: $color-hover-green;

    svg {
      color: $color-text-green;
    }
  }

  span {
    color: $color-text-green;
  }
}

.tweet-button:nth-child(3):hover {
  > :first-child {
    background-color: $color-hover-red;

    svg {
      color: $color-text-red;
    }
  }

  span {
    color: $color-text-red;
  }
}

@include lt-sm {
  .tweet-button:last-child {
    margin-right: -8px;
  }
}

@include xxs {
  .tweet-button:nth-child(4) {
    display: none;
  }
}

/* ==========================================================================
   Text Ellipsis in Flex Box
   ========================================================================== */

/**
 Example HTML:

 <div class="text-ellipsis-container">
     <span class="text-ellipsis">...</span>
 </div>

*/
</style>
