<template>
  <header v-if="isMediaXxs" role="banner">
    <div class="navigation-column">
      <div class="navigation-column-fixed-container">
        <div>
          <div class="navigation">
            <nav role="navigation">
              <NavigationButton
                v-for="navRoute in navRoutes"
                :navRoute="navRoute" />
              <div class="dropdown nav-item" v-if="$store.state.isAuth">
                <div>
                  <Icon.MoreCircle />
                  <div v-if="isMediaLtLg">
                    <span class="fs-xl lh-lg">More</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="new-tweet-btn-container">
            <NewTweetButton isInNavigationSection />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import * as Icon from '@/components/icons/utils/icon-components';
import NewTweetButton from '@/components/shared/NewTweetButton.vue';
import NavigationButton from '@/components/navigation-column/ui/NavigationButton.vue';
import router from '@/router/index.js';
import { useMedia } from '@/js/helpers/window-context';
import { useStore } from 'vuex';

const isMediaXxs = useMedia('xxs');
const isMediaLtLg = useMedia('lt-lg');

const navRoutes = router.options.routes.filter((r) => {
  //(r.meta ? r.meta["isInNavigationColumn"] : false) === true
  if (r.meta) {
    if (r.meta['isInNavigationColumn']) {
      if (useStore().state.isAuth) {
        if (!r.meta['isGuestOnly']) {
          return true;
        }
      } else {
        if (!r.meta['requiresAuth']) {
          return true;
        }
      }
    }
  }
});
</script>

<style scoped lang="scss">
$navigation-column-height: 270px;

.new-tweet-btn-container {
  .new-tweet-btn {
    width: 90%;
    margin-bottom: 4px;
    margin-top: 4px;
  }
}

header {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  background-color: $color-canvas-primary;
}

@include lt-sm {
  header {
    flex-grow: 0;
  }
}

.navigation-column {
  width: $navigation-column-height;

  .navigation-column-fixed-container {
    position: fixed;
    display: flex;
    height: 100%;

    & > div:first-child {
      width: $navigation-column-height;
      padding-left: 12px;
      padding-right: 12px;

      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}

@include lt-lg {
  .navigation-column {
    width: 88px;

    .navigation-column-fixed-container {
      & > div:first-child {
        width: 88px;
      }
    }
  }
}
</style>
