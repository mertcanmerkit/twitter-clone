<template>
  <div class="cellInnerDiv">
    <article class="tweet-container">
      <div class="user-image-container">
        <router-link :to="{ name: ROUTE_CONSTANTS.PROFILE.NAME }">
          <img
            alt="Mertcan Merkit"
            draggable="true"
            src="https://pbs.twimg.com/profile_images/1286571288731975681/roFNwVsk_x96.jpg" />
        </router-link>
      </div>
      <div class="tweet">
        <div class="tweet-header">
          <div class="tweet-header-content text-ellipsis-container">
            <router-link
              :to="{ name: ROUTE_CONSTANTS.PROFILE.NAME }"
              class="text-ellipsis">
              <span class="fw-bold">Mertcan Merkit</span>
            </router-link>
            <div class="tweet-info text-ellipsis-container">
              <span class="text-ellipsis text-secondary">@mertcanmerkit</span>
              <span class="spacing-dot text-secondary">·</span>
              <span class="date text-secondary">Mar 7</span>
            </div>
          </div>
          <div>
            <TweetButton class="options-button" iconName="ThreeDot" />
          </div>
        </div>
        <div class="tweet-content">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae id
            minus reiciendis repellat temporibus. Consequatur eaque, esse
            exercitationem illo laboriosam laborum minima porro qui sit sunt,
            vel voluptatibus! Blanditiis commodi iste itaque magni vel! Amet
            eius enim facilis iure mollitia non praesentium quia quibusdam!
            Aliquam excepturi expedita possimus recusandae sed!
          </span>
        </div>
        <div class="tweet-buttons">
          <TweetButton iconName="Comments" count="123" />
          <TweetButton iconName="Retweet" count="123" />
          <TweetButton iconName="Heart" count="123" />
          <TweetButton iconName="Interaction" count="123" />
          <TweetButton iconName="Share" />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ROUTE_CONSTANTS } from '@/router/constants.js';
import TweetButton from '@/components/shared/TweetButton.vue';
</script>

<style lang="scss" scoped>
.cellInnerDiv {
  border-bottom: 1px solid $color-border-primary;
}

.cellInnerDiv:last-child {
  border-bottom: unset;
}

.tweet-container {
  padding: 12px 16px;
  display: flex;
}

.tweet {
  min-width: 0;
}

.tweet-content {
  span {
    word-break: break-all;
  }
}

.tweet-header {
  display: flex;
  justify-content: space-between;
}

.tweet-header-content {
  display: flex;
}

.tweet-info {
  display: flex;
  margin-left: 4px;
}

.options-button {
  margin: -8px -8px -8px 20px;
}

.spacing-dot {
  padding: 0 4px;
}

.date {
  white-space: nowrap;
}

.tweet-buttons {
  display: flex;
  justify-content: space-between;
  max-width: 425px;
  margin-top: 12px;
}

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
</style>
