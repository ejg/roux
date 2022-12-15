<template>
  <div>
    <div class="header">
      <NuxtLink to="/"
        ><img
          src="@/assets/images/logo-small.png"
          alt="speedcube"
          title="home link"
      /></NuxtLink>
      <button v-if="!isHome" @click="toggleMenu">{{ showHideText }} Nav</button>
      <h1 v-else>Roux Cubing Algorithms</h1>
    </div>
    <Nav v-if="showNav" />
    <slot />
  </div>
</template>
<script setup>
const router = useRouter();
const showAll = ref(false);
const isHome = computed(() => router.currentRoute.value.path == '/');
const showNav = computed(() => isHome.value || showAll.value);
const showHideText = computed(() => (showNav.value ? 'Hide' : 'Show'));

function toggleMenu() {
  showAll.value = !showAll.value;
}
</script>
<style scoped>
img {
  width: 50px;
}
button {
  border: none;
  background: transparent;
  cursor: pointer;
}
.header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 10px 30px;
}
.home {
  margin: 10px;
}
</style>
