<template>
  <div class="header">
    <NuxtLink to="/"
      ><img
        src="@/assets/images/logo-small.png"
        alt="speedcube"
        title="home link"
    /></NuxtLink>
    <button v-if="showButton" @click="toggleNav">{{ buttonText }} Nav</button>
    <h1>{{ pageTitle }}</h1>
  </div>
</template>
<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: false,
    default: 'Show',
  },
  showButton: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['toggleNav']);

const { pageTitle } = usePageData();

function toggleNav() {
  emit('toggleNav');
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
  justify-content: center;
  gap: 30px;
  margin: 10px 30px;
}
</style>
