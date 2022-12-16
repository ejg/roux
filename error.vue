<template>
  <div>
    <NuxtLayout name="error">
      <h2>{{ error?.statusCode }} - {{ error?.message }}</h2>
    </NuxtLayout>
  </div>
</template>
<script setup>
const error = useError();
console.log(error);
</script>
<style scoped>
h2 {
  margin: 30px;
}
</style>
