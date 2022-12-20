<template>
  <CMLLNav />
  <div class="wrapper">
    <div class="moves">
      <CMLLMoves v-for="(move, index) in JSON.parse(moves)" :key="index" :move="move" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const name = route.params.name;

const { data: moves, error } = await useFetch(
  "https://roux.ejgejg.com/rouxPHP/algorithms.php",
  {
    body: { cmll: name, requestType: "myAJAX" },
    method: "POST",
    mode: "no-cors",
  }
);
</script>
<style scoped>
@media screen and (min-width: 800px) {
  .wrapper {
    width: 800px;
    margin: 20px auto 13vw;
    padding: 0;
  }
}
</style>
