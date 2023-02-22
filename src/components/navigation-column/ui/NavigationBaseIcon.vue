<template>
  <Suspense>
    <component
      :is="iconFillComponent"
      v-if="$route.name == navRouteName"></component>
    <component :is="iconComponent" v-else></component>
    <template #fallback>
      <div
        style="
          height: 28px;
          width: 28px;
          background-color: #ddd;
          border-radius: 9999px;
        "></div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const iconComponent = defineAsyncComponent(() =>
  import(`../../icons/Icon${props.iconName}.vue`)
);
const iconFillComponent = defineAsyncComponent(() =>
  import(`../../icons/Icon${props.iconName}Fill.vue`)
);
const props = defineProps(["iconName", "navRouteName"]);
</script>
