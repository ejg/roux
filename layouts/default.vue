<template>
  <div>
    <NuxtLink to="/">Home </NuxtLink>
    <button v-if="!isHome" @click="toggleMenu">Show All</button>
    <Nav v-if="showNav" />
    <slot />
  </div>
</template>
<script setup>
const router = useRouter();
const showAll = ref(false);
const isHome = computed(() => router.currentRoute.value.path == '/');
const showNav = computed(() => isHome.value || showAll.value);

function toggleMenu() {
  showAll.value = !showAll.value;
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
