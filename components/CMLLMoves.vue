<template>
  <p class="note" :class="move.done">
    {{ move.shorthand }} <span>{{ move.hint }}</span>
  </p>
  <div class="flex">
    <!-- <img src="move.image" /> -->
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
<style scoped>
.box {
  margin-bottom: 13vw;
}
.flex {
  display: flex;
  padding: 5px 10px;
  background: #eee;
  align-items: center;
  flex-wrap: wrap;
}
.flex img {
  height: 60px;
  margin: 5px 30px 5px 0;
}
.flex h4 {
  margin: 5px 0;
}
.flex_hdr {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.flex_hdr img {
  width: 60px;
}
.col {
  flex-direction: column;
  align-items: flex-start;
}
.col > h4,
.col .multi {
  margin-top: 7px;
}
.box {
  margin: 20px 0;
  padding: 0 20px;
}
.back {
  text-align: right;
  margin-top: 15px;
}
.note {
  color: blue;
}

.URUr {
  color: blue;
}
.uRF {
  color: green;
}
.Rfr {
  color: orange;
}
.sm {
  color: red;
}

.moves p {
  margin-left: 24px;
  font-size: 1.4rem;
}
.moves p span {
  display: none;
}
.moves .done {
  margin-left: 0;
}
.done::before {
  content: "\2713";
  color: green;
  font-size: 1.5rem;
  margin-right: 5px;
}
.done + .flex {
  background: #eef;
}

@media screen and (min-width: 800px) {
  .moves p span {
    display: inline;
    font-size: 0.8rem;
    padding-left: 50px;
  }
}
</style>
