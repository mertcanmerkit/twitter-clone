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
        name="tweetTextarea"
        placeholder="Ne oluyor?"
        id="tweetArea"></textarea>
      <div class="hr" v-if="showRuler"></div>
      <div class="tweet-control-container">
        <div class="tweet-options">
          <div class="tweet-option">
            <div
              style="
                width: 20px;
                height: 20px;
                background-color: #1d9bf0;
              "></div>
          </div>
          <div class="tweet-option">
            <div
              style="
                width: 20px;
                height: 20px;
                background-color: #1d9bf0;
              "></div>
          </div>
          <div class="tweet-option">
            <div
              style="
                width: 20px;
                height: 20px;
                background-color: #1d9bf0;
              "></div>
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
import NewTweetButton from '@/components/shared/NewTweetButton.vue';
import { onMounted, ref } from 'vue';

const showRuler = ref(false);
const isSendBtnDisable = ref(true);

onMounted(() => {
  const textArea = document.querySelector('#tweetArea');

  textArea.addEventListener('focus', function () {
    showRuler.value = true;
  });

  textArea.addEventListener('input', function () {
    setDynamicHeight();
    setSendButton();
  });

  function setDynamicHeight() {
    textArea.style.height = 0;
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  function setSendButton() {
    isSendBtnDisable.value = textArea.value.length <= 0;
  }
});
</script>

<style lang="scss" scoped>
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

  .tweet-option {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: $color-canvas-transparent;
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
