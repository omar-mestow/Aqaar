<template>
  <section class="header-image mt-2 mb-3">
        <img src="/logos/icelogo.png"  style="" height="50" alt="">
        <h3 class="mx-3 fw-bold text-center">{{ title }}</h3>
        <!-- <img src="/logos/icelogo.png" class="img" height="50" alt=""> -->

  </section>
</template>

<script setup>
const {  title } = defineProps([ "title","class"]);
</script>

<style lang="scss" scoped>
 @import "~/assets/styles/scss/theme/variables";
.header-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    color: $primary;
  }

  .img {
    rotate: 90deg;
  }

  
}

</style>
