<template>
  <div class="wrap">
    <div class="a1">box1</div>
    <div class="a2">box2</div>
    <div class="a3">box3</div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 500px;
  margin: 20px auto;
  border: 2px solid;
  div {
    width: 100%;
    height: 200px;
  }
  .a1 {
    background: yellow;
    order: 1;
    flex: 2;
  }
  .a2 {
    background: red;
    // align-self: flex-start;
    order: 3;
    flex: 2;
  }
  .a3 {
    background: blue;
    order: 2;
    flex: 1;
  }
}
</style>>
