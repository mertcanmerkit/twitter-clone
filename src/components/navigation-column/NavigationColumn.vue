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
                    <span class="fs-xl">More</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div>
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
header {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  background-color: #ff8686;
}

@include lt-sm {
  header {
    flex-grow: 0;
  }
}

.navigation-column {
  width: 200px;

  .navigation-column-fixed-container {
    position: fixed;
    display: flex;
    height: 100%;

    & > div:first-child {
      overflow-x: hidden;
      overflow-y: auto;
      width: 200px;
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
