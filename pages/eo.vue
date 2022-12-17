<template>
  <div class="box">
    <h2>2 bad edges</h2>
    <p class="done">U layer, adjacent --> set up to arrow</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo2-1.svg" />
      <h4>M' U M' U2 - M' U M'</h4>
    </div>

    <p class="done">U layer, opposite</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo2-2.svg" />
      <h4>M' U M U' - M' U M'</h4>
    </div>
  </div>
  <div class="box">
    <h2>4 bad edges</h2>
    <p>U & D layer</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo4-1.svg" />
      <h4>M U2 M' U2 - M' U M'</h4>
    </div>

    <p>U layer</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo4-2.svg" />
      <h4>M' U2 M' U2 - M' U M'</h4>
    </div>

    <p class="done">3 in U layer, DF bad</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo4-3.svg" />
      <h4>M' U M'</h4>
    </div>

    <p class="done">3 in U layer, DB bad</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo4-4.svg" />
      <h4>M U M</h4>
    </div>
  </div>
  <div class="box">
    <h2>6 bad edges</h2>
    <p class="done">All six edges bad</p>
    <div class="flex">
      <img src="@/assets/images/eo/eo6.svg" />
      <h4>R U' r' U' M' U r U r'</h4>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 50px;
}
.flex {
  display: flex;
  padding: 10px;
  background: #eee;
  align-items: center;
}
.flex img {
  margin-right: 30px;
}
.box {
  margin: 20px 0;
  padding: 0 20px;
}
.done::before {
  content: '\2713';
  color: green;
  font-size: 1.5rem;
  margin-right: 5px;
}
.done + .flex {
  background: #eef;
}

@media screen and (min-width: 800px) {
  .box {
    width: 400px;
    margin: 20px auto;
    padding: 0;
  }
}
</style>
