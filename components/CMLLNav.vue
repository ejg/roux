<template>
  <div class="box" :class="mode">
    <a
      v-for="item in nav"
      :key="item.name"
      :href="`/cmll/${item.name}`"
      :class="item.class"
    >
      <div class="flex">
        <CMLLImg :path="item.name" :alt="item.title" :width="width" />
        <h2 v-if="fullNav">{{ item.pageTitle }}</h2>
      </div>
    </a>
  </div>
</template>
<script setup>
import routeData from '@/assets/data/routeData.json';

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'bottom',
  },
});

const { mode } = toRefs(props);

const nav = computed(
  () => routeData.find((data) => data.name === 'cmll-name').sub
);

const fullNav = ref(mode.value === 'full');

const width = computed(() => (fullNav.value ? 100 : null));
</script>
<style scoped>
.box.bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2vw;
  position: fixed;
  bottom: 0;
}
.box.full {
  flex-direction: column;
  gap: 0;
  padding: 0 20px;
}
.full .flex {
  display: flex;
  padding: 10px;
  background: #eee;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3px;
}
.bottom .flex img {
  width: clamp(40px, 9vw, 100px);
  aspect-ratio: 1;
}
.full .flex img {
  margin-right: 30px;
}
.full .random .flex {
  padding: 30px 10px;
}
.full .random h2 {
  margin-left: 130px;
}

@media screen and (min-width: 800px) {
  .box.full {
    width: 400px;
    margin: 20px auto;
    padding: 0;
  }
}
</style>
