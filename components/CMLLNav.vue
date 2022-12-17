<template>
  <div class="box" :class="mode">
    <a
      v-for="item in nav"
      :key="item.name"
      :href="`/cmll/${item.name}`"
      :class="item.class"
    >
      <div class="flex">
        <CMLLImg
          v-if="showImage(item.name)"
          :path="item.name"
          :alt="item.title"
          :width="width"
        />
        <h2>{{ item.header }}</h2>
      </div>
    </a>
  </div>
</template>
<script setup>
import nav from '@/assets/data/cmllNav.json';

const props = defineProps({
  mode: String,
  required: false,
  default: 'bottom',
});

const width = ref(100);

function showImage(itemName) {
  return itemName !== 'random';
}
</script>
<style scoped>
.box.full {
  margin: 20px 0;
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
.full .flex img {
  margin-right: 30px;
  height: 100px;
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
