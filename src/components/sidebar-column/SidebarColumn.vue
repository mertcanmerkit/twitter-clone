<template>
  <div class="sidebar-column">
    <div class="sidebar-column-sticky-container">
      <div class="search">Search</div>
      <div class="topics">Aa</div>
      <div class="recommends">bb</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$sidebar-column-width: 350px;

.sidebar-column {
  position: relative;
  width: $sidebar-column-width;
  margin-right: 10px;
  background-color: darkolivegreen;

  .sidebar-column-sticky-container {
    position: sticky;
    top: -150px;
  }

  .search {
    position: fixed;
    z-index: 2;
    top: 0;
    width: $sidebar-column-width;
    background-color: white;
  }

  .topics {
    height: 300px;
    background-color: red;
  }

  .recommends {
    height: 200px;
    background-color: blue;
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
