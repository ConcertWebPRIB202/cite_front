<script setup>

</script>

<template>
  <div class="ma overflow-hidden z-index">
    <div class="container ma">
      <router-view></router-view>
    </div>
  </div>
  <!-- <div class="ma overflow-hidden submain-background-color pt-10 pb-10">
    <div class="container ma">
      <router-view></router-view>
    </div>
  </div> -->
</template>

<style scoped>
.z-index{
  z-index: 0;
}
</style>