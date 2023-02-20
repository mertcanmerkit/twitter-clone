<template>
  <header role="banner">
    <div class="navigation-column">
      <div class="navigation-column-fixed-container">
        <div>
          <div class="navigation">
            <nav role="navigation">
              <NavigationButton v-for="(navRoute, key) in navRoutes" :key="key" :navRoute="navRoute"/>

            </nav>
          </div>
          <div>
            <NewTweetButton isInNavigationSection/>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import NewTweetButton from '@/components/shared/NewTweetButton.vue';
import NavigationButton from "@/components/shared/NavigationButton.vue";
import router from "@/router/index.js";
import IconHomeFill from "@/components/icons/IconHomeFill.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconUserFill from "@/components/icons/IconUserFill.vue";


const navRoutes = router.options.routes.filter((r) => (r.meta ? r.meta['isInNavigationColumn'] : false) === true)

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