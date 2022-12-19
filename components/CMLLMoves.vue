<template>
  <p class="note" :class="move.done">
    {{ move.shorthand }} <span>{{ move.hint }}</span>
  </p>
  <div class="flex">
    <img src="move.image" />
    <h4>{{ move.moves }}</h4>
  </div>
</template>
<script setup>
const props = defineProps({
  move: {
    type: Object,
    required: true,
  },
});
</script>
