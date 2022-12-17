<template>
  <div class="box" :class="mode">
    <a href="/cmll/random" class="random">
      <div class="flex">
        <h2>Random</h2>
      </div>
    </a>
    <a href="/cmll/skip">
      <div class="flex">
        <img src="@/assets/images/cmll/skip/header.svg" />
        <h2>O - Skip</h2>
      </div>
    </a>
    <a href="/cmll/anti-sune">
      <div class="flex">
        <img src="@/assets/images/cmll/anti-sune/header.svg" />
        <h2>AS - Antisune</h2>
      </div>
    </a>
    <a href="/cmll/sune">
      <div class="flex">
        <img src="@/assets/images/cmll/sune/header.svg" />
        <h2>S - Sune</h2>
      </div>
    </a>
    <a href="/cmll/bowtie">
      <div class="flex">
        <img src="@/assets/images/cmll/bowtie/header.svg" />
        <h2>L - Bowtie</h2>
      </div>
    </a>
    <a href="/cmll/headlights">
      <div class="flex">
        <img src="@/assets/images/cmll/headlights/header.svg" />
        <h2>U - Headlights</h2>
      </div>
    </a>
    <a href="/cmll/chameleon">
      <div class="flex">
        <img src="@/assets/images/cmll/chameleon/header.svg" />
        <h2>T - Chameleon</h2>
      </div>
    </a>
    <a href="/cmll/superman">
      <div class="flex">
        <img src="@/assets/images/cmll/superman/header.svg" />
        <h2>Pi - Superman</h2>
      </div>
    </a>
    <a href="/cmll/doublesune">
      <div class="flex">
        <img src="@/assets/images/cmll/doublesune/header.svg" />
        <h2>H - Doublesune</h2>
      </div>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  mode: String,
  required: false,
  default: 'bottom',
});
</script>
<style scoped>
.flex {
  display: flex;
  padding: 10px;
  background: #eee;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3px;
}
.flex img {
  margin-right: 30px;
  height: 100px;
}
.box {
  margin: 20px 0;
  padding: 0 20px;
}
.random .flex {
  padding: 30px 10px;
}
.random h2 {
  margin-left: 130px;
}

@media screen and (min-width: 800px) {
  .box {
    width: 400px;
    margin: 20px auto;
    padding: 0;
  }
}
</style>
