<template>
  <img :src="image" :alt="alt" :width="width" :height="width" />
</template>

<script setup>
const props = defineProps({
  path: { type: String },
  alt: { type: String },
  width: { type: Number },
});

const { path } = toRefs(props);
const image = ref();

watchEffect(async () => {
  image.value = (
    await import(
      /* @vite-ignore */ `../assets/images/cmll/${path.value}/header.svg`
    )
  ).default;
});
</script>
