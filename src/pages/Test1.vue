<template>
  <!-- flex연습 -->
  <br>container<br>
  <div class="container">
    <div class="item">aaa</div>
    <div class="item">bb</div>
    <div class="item">cccccc</div>
  </div>
  <br>infl<br>
  <div class="infl">
    <div class="item">aaa</div>
    <div class="item">bb</div>
    <div class="item">cccccc</div>
  </div>
  <br>col<br>
  <div class="col">
    <div class="item">aaa</div>
    <div class="item">bb</div>
    <div class="item">cccccc</div>
  </div>
  <br>row<br>
  <div class="row">
    <div class="item">aaa</div>
    <div class="item">bb</div>
    <div class="item">cccccc</div>
  </div>
  <br>flow<br>
  <div class="flow">
    <div class="item">aaa</div>
    <div class="item">bb</div>
    <div class="item">cccccc</div>
  </div>
</template>

<script>

export default {
  setup () {

  }
}
</script>

<style scoped>
.container {
  display: flex;
}
.infl {
  display: inline-flex;
}
.col {
  display: flex;
  flex-direction: row;
}
.row {
  display: flex;
  flex-direction: row;
}
.flow {
  flex-flow: row wrap;
}
</style>
