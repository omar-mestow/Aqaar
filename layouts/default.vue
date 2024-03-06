<template>
  <div>
    <ElementsLoader :duration="1000" />
    <ClientOnly>
      <div>
        <SharedNavbar />
        <!-- <div> -->
          <slot />
        <!-- </div> -->
        <SharedFooter />
      </div>
      
    </ClientOnly>
  </div>
</template>

<script setup>


</script>

<style></style>