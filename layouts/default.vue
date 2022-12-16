<template>
  <div>
    <Header
      :buttonText="buttonText"
      :showButton="showButton"
      @toggleNav="toggleNav"
    />
    <Nav v-if="showNav" />
    <slot />
  </div>
</template>
<script setup>
const router = useRouter();
const showAll = ref(false);
const showButton = computed(() => router.currentRoute.value.path !== '/');
const showNav = computed(() => !showButton.value || showAll.value);
const buttonText = computed(() => (showNav.value ? 'Hide' : 'Show'));

function toggleNav() {
  showAll.value = !showAll.value;
}

const error = useError();
console.log(error.value);
</script>

<style scoped>
/* empty or no style create css not found error in nuxt */
div {
  margin: 0;
}
</style>
