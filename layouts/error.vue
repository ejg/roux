<template>
  <div>
    <Header />
    <slot />
    <Nav />
  </div>
</template>
<script setup>
const error = useError();
console.log('layout', error.value);
</script>
<style scoped>
/* empty or no style create css not found error in nuxt */
div {
  margin: 0;
}
</style>
