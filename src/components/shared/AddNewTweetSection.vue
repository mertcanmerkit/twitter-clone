<template>
  <div class="add-new-tweet">
    <div class="user-image-container">
      <router-link :to="{ name: 'profile' }">
        <img
          alt="Mertcan Merkit"
          draggable="true"
          src="https://pbs.twimg.com/profile_images/1286571288731975681/roFNwVsk_x96.jpg" />
      </router-link>
    </div>
    <div class="new-tweet-form-container">
      <textarea
        @focus="textAreaFocus"
        @input="textAreaTexting"
        name="tweetTextarea"
        placeholder="Ne oluyor?"
        ref="textArea"></textarea>
      <div class="hr" v-if="showRuler"></div>
      <div class="tweet-control-container">
        <div class="tweet-options">
          <div class="tweet-option">
            <Icon.Media />
          </div>
          <div class="tweet-option">
            <Icon.Gif />
          </div>
          <div class="tweet-option">
            <Icon.Survey />
          </div>
          <div class="tweet-option">
            <Icon.Emoji />
          </div>
          <div class="tweet-option">
            <Icon.Schedule />
          </div>
          <div class="tweet-option disable">
            <Icon.Location />
          </div>
        </div>
        <div style="margin-top: 12px; margin-left: 12px">
          <NewTweetButton :isSendBtnDisable="isSendBtnDisable" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
import NewTweetButton from '@/components/shared/NewTweetButton.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showRuler = ref(false);
const isSendBtnDisable = ref(true);

const textArea = ref(null);

onMounted(() => {
  if (route.name === 'addNewTweet') {
    textArea.value.focus();
  }
});

function textAreaFocus() {
  showRuler.value = true;
}

function textAreaTexting(event) {
  setDynamicHeight(event.target);
  setSendButton(event.target);
}

function setDynamicHeight(el) {
  el.style.height = 0;
  el.style.height = el.scrollHeight + 'px';
}

function setSendButton(el) {
  isSendBtnDisable.value = el.value.length <= 0 || el.value.length > 280;
}
</script>

<style lang="scss">
.add-new-tweet {
  display: flex;
  padding: 8px 16px;
  background-color: $color-canvas-primary;
}

.user-image-container {
  padding-top: 4px;
  margin-right: 12px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
  }
}

.new-tweet-form-container {
  width: 100%;
}

.tweet-control-container {
  display: flex;
  justify-content: space-between;
  margin-left: 2px;
  margin-right: 2px;
}

.tweet-options {
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-left: -8px;
  transition-duration: 0.2s;

  .tweet-option {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    cursor: pointer;
    background-color: $color-canvas-transparent;
    color: $color-text-link;

    &:hover {
      background-color: $color-hover-highlight;
      border-radius: 9999px;
    }

    &.disable {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}

textarea[name='tweetTextarea'] {
  width: 100%;
  height: 24px;
  margin: 12px 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  resize: none;
  color: $color-text-primary;
  background-color: $color-canvas-transparent;
}
</style>
