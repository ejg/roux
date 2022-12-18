<template>
  <div>
    <Header
      :buttonText="buttonText"
      :showButton="!isHome"
      @toggleNav="toggleNav"
    />
    <Nav v-if="showNav" @toggleNav="toggleNav" />
    <slot />
  </div>
</template>
<script setup>
const route = useRoute();

// home page - don't show nav button, nav always visible
const isHome = computed(() => route.path === '/');
const navVisible = ref(isHome.value);

// always show Nav on home page
const showNav = computed(() => isHome.value || navVisible.value);
const buttonText = computed(() => (showNav.value ? 'Hide' : 'Show'));

function toggleNav() {
  navVisible.value = !navVisible.value;
}
</script>

<style scoped>
/* empty or no style create css not found error in nuxt */
div {
  margin: 0;
}
</style>
