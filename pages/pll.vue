<template>
  <div class="box pll">
    <h2>Edges Only</h2>
    <p>Both across</p>
    <div class="flex">
      <img src="h.png" />
      <h4>M2 U M2 U2 M2 U M2</h4>
    </div>

    <p>Counter-clockwise</p>
    <div class="flex">
      <img src="ua.png" />
      <h4>M2 U M U2 M' U M2</h4>
    </div>

    <p>Clockwise</p>
    <div class="flex">
      <img src="ub.png" />
      <h4>M2 U' M U2 M' U' M2</h4>
    </div>

    <p>Diagonal</p>
    <div class="flex">
      <img src="z.png" />
      <h4>M' U M2 U M2 U M' U2 M2</h4>
    </div>
  </div>

  <div class="box pll">
    <h2>Corners and Edges</h2>
    <p>T Perm</p>
    <div class="flex">
      <img src="t.png" />
      <h4>
        <span class="sm">R U R' U'</span> <span class="Rfr">R' F R</span>2
        <span class="URUr">U' R' U' R</span> <span class="uRF">U R' F'</span>
      </h4>
    </div>

    <p>Y Perm</p>
    <div class="flex">
      <img src="y.png" />
      <h4>
        F R <span class="URUr">U' R' U' R</span>
        <span class="uRF">U R' F'</span> <span class="sm">R U R' U'</span>
        <span class="Rfr">R' F R</span> F'
      </h4>
    </div>

    <p>J Perm</p>
    <div class="flex">
      <img src="ja.png" />
      <h4>x R2 F R F' R U2 r' U r U2</h4>
    </div>

    <p>J Perm</p>
    <div class="flex">
      <img src="jb.png" />
      <h4>R U R' F' R U R' U' R' F R2 U' R'</h4>
    </div>

    <p>Nb Perm</p>
    <div class="flex">
      <img src="nb.png" />
      <h4>R' U R U' R' F' U' F R U R' F R' F' R U' R</h4>
    </div>
  </div>
</template>
<style>
.flex {
  display: flex;
  padding: 5px 10px;
  background: #eee;
  align-items: center;
  flex-wrap: wrap;
}
.flex img {
  height: 60px;
  margin: 5px 10px 5px 0;
}
.flex h4 {
  margin: 5px 0;
}
.box {
  margin: 20px 0;
  padding: 0 10px;
}
.back {
  text-align: right;
  margin-top: 15px;
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

@media screen and (min-width: 800px) {
  .box {
    width: 800px;
    margin: 20px auto;
    padding: 0;
  }
  .flex img {
    margin-right: 30px;
  }
}
</style>
