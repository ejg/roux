<template>
  <div class="wrapper" @click="closeNav">
    <NuxtLink to="/cmll">CMLL</NuxtLink>
    <NuxtLink to="/pll">PLL</NuxtLink>
    <NuxtLink to="/eo">EO</NuxtLink>
    <NuxtLink to="/random">Random</NuxtLink>
  </div>
</template>
<script setup>
const emit = defineEmits(['toggleNav']);

function closeNav() {
  emit('toggleNav');
}
</script>
<style scoped>
a {
  display: block;
  background: #eef;
  padding: 20px 20px 20px 30px;
  margin: 5px 0;
}
</style>
