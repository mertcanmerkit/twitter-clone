<template>
  <div>
    <div id="layers" style="display: inline">
      <slot name="layers"></slot>
    </div>
    <div class="container">
      <NavigationColumn />
      <main role="main">
        <div class="content">
          <div class="content-container">
            <slot name="content"></slot>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import NavigationColumn from '@/components/navigation-column/NavigationColumn.vue';
</script>

<style lang="scss"></style>
