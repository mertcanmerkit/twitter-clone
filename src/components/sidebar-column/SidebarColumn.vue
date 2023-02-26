<template>
  <div v-if="isMediaLtMd" class="sidebar-column">
    <div class="sidebar-column-sticky-container">
      <div class="search">
        <div>Search</div>
      </div>
      <div style="height: 53px"></div>
      <div class="topics">Aa</div>
      <div class="recommends">bb</div>
    </div>
  </div>
</template>

<script setup>
import { useMedia } from '@/js/helpers/window-context';

const isMediaLtMd = useMedia('lt-md');
</script>

<style scoped lang="scss">
$sidebar-column-width: 350px;

.sidebar-column {
  position: relative;
  width: $sidebar-column-width;
  margin-right: 10px;
  background-color: $color-canvas-primary;

  .sidebar-column-sticky-container {
    position: sticky;
    top: -150px;
    padding-top: 12px;
  }

  .search {
    position: fixed;
    z-index: 2;
    top: 0;
    width: $sidebar-column-width;
    background-color: $color-canvas-primary;
    & > div {
      padding: 1rem;
      margin: 0.35rem 0;
      border-radius: 9999px;
      background-color: $color-canvas-primary-lt;
    }
  }

  .topics {
    height: 300px;
    margin-bottom: 16px;
    background-color: $color-canvas-primary-lt;
    border-radius: 16px;
  }

  .recommends {
    height: 200px;
    margin-bottom: 16px;
    border-radius: 16px;
    background-color: $color-canvas-primary-lt;
  }
}

@media screen and (max-width: 1095px) {
  $sidebar-column-width: 290px;

  .sidebar-column {
    width: $sidebar-column-width;

    .search {
      width: $sidebar-column-width;
    }
  }
}
</style>
