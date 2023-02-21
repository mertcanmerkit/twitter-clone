<template>
  <div>
    <div id="layers" style="display: inline;">
      <MobileHeader v-if="isMobile" />
      <MobileNavigation v-if="isMobile" />
    </div>
    <div class="container">
      <NavigationColumn v-if="isMediaXxs" />
      <main role="main">
        <div class="content">
          <div class="content-container">
            <router-view></router-view>
            <SidebarColumn v-if="isMediaLtMd" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import SidebarColumn from '@/components/sidebar-column/SidebarColumn.vue';
import NavigationColumn from '@/components/navigation-column/NavigationColumn.vue';
import MobileHeader from '@/components/mobile/header/MobileHeader.vue';
import MobileNavigation from '@/components/mobile/navigation/MobileNavigation.vue';


import { useMedia } from '@/js/helpers/window-context';

const isMobile = useMedia('mobile');
const isMediaXxs = useMedia("xxs");
const isMediaLtMd = useMedia("lt-md");
</script>

<style lang="scss">
@import "styles/main";

.container {
  display: flex;
  position: relative;
}

main {
  flex-grow: 1;
  background-color: #82ff00;

  .content {
    width: 990px;

    .content-container {
      display: flex;
      justify-content: space-between;


    }
  }
}

@media (min-width: $screen-md-min) and (max-width: 1095px) {
  main {
    .content {
      width: 920px;
    }
  }
}

@include sm {
  main {
    .content {
      width: 600px;
    }
  }
}

@include lt-sm {

  main {
    .content {
      width: 100%;
    }
  }
}
</style>
