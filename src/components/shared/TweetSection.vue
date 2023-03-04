<template>
  <div style="position: relative">
    <div class="cellInnerDiv" style="position: absolute; width: 100%">
      <article class="tweet-container">
        <div class="tweet">
          <div class="user-image-container">
            <router-link :to="{ name: ROUTE_CONSTANTS.PROFILE.NAME }">
              <img
                  alt="Mertcan Merkit"
                  draggable="true"
                  src="https://pbs.twimg.com/profile_images/1286571288731975681/roFNwVsk_x96.jpg"/>
            </router-link>
          </div>
          <div style="flex-grow: 1; min-width: 0">
            <div class="tweet-owner-info">
              <div style="display: flex;min-width: 0">
                <div class="text-ellipsis">
                  <router-link
                      class="action"
                      :to="{ name: ROUTE_CONSTANTS.PROFILE.NAME }">
                    <div><span>Mertcan Nur Faruk Merkit </span></div>
                  </router-link>
                </div>
                <div style="margin-left: 4px;display: flex;min-width: 0">
                  <div class="text-ellipsis">
                    <div><span>@mertcanmerkit</span></div>
                  </div>
                  <span>·</span>
                  <div class="text-ellipsis">
                    <div>
                      <span>12s</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Icon.Emoji style="height: 17.5px"/>
              </div>
            </div>
            <div class="tweet-content">
              <span>Content</span>
            </div>
            <div class="tweet-buttons">
              <Icon.Bell/>
              <Icon.Emoji/>
              <Icon.Gif/>
              <Icon.Hashtag/>
              <Icon.Letter/>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
  <!--  <div>
      <div style="position: relative">
        <div data-testid="cellInnerDiv" style="position: absolute; width: 100%">
          <div style="display: flex">
            <div class="text-ellipsis">
              <a href="#">
                <div>
                  <span>
                    sedat kapanoğlu mertcan merkit aman aman son aman son son son
                    3 grrr kılıçdaroğlu aday olmasın lütfen
                  </span>
                </div>
              </a>
            </div>
            <div>
              <Icon.Emoji />
            </div>
          </div>
        </div>
      </div>
    </div>-->
</template>

<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
import {ROUTE_CONSTANTS} from '@/router/constants.js';
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
}

.tweet {
  display: flex;
}

.tweet-owner-photo {
}

.tweet-content {
  span {
    word-break: break-all;
  }
}

.tweet-owner-info {
  display: flex;
  justify-content: space-between;
}

.tweet-buttons {
  display: flex;
  justify-content: space-between;
  max-width: 425px;

  & svg {
    height: 17.5px;
    color: $color-text-secondary;
  }

  @include xxs {
    & svg:nth-child(3) {
      display: none;
    }
  }
}

/* ==========================================================================
   Text Ellipsis in Flex Box
   ========================================================================== */

/**
 Example HTML:

 <div class="text-ellipsis">
   <div>
     <span>...</span>
   </div>
 </div>

*/

.text-ellipsis {
  min-width: 0;

  div {
    display: flex;

    span {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}
</style>
