<template>
  <div>
    <Header
      :buttonText="buttonText"
      :showButton="showButton"
      @toggleNav="toggleNav"
    />
    <Nav v-if="showNav" @toggleNav="toggleNav" />
    <slot />
  </div>
</template>
<script setup>
const route = useRoute();
const showAll = ref(false);
// don't show nav button on home page
const showButton = computed(() => route.path !== '/');
// always show Nav on home page
const showNav = computed(() => !showButton.value || showAll.value);
const buttonText = computed(() => (showNav.value ? 'Hide' : 'Show'));

function toggleNav() {
  showAll.value = !showAll.value;
}
</script>

<style scoped>
/* empty or no style create css not found error in nuxt */
div {
  margin: 0;
}
</style>
