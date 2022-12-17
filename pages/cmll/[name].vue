<template>
  <CMLLNav mode="full" />
</template>
<script setup lang="ts">
// import {} from '#app';  scopes name to file

const route = useRoute();
const name = route.params.name;
console.log('[name]', name);
</script>

<style scoped></style>
