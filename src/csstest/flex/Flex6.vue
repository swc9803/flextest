<template>
  <!-- <div class="box">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-01.jpg">
  </div> -->

  <div class="image-grid">
    <div class="image01"></div>
    <div class="image02"></div>
    <div class="image03"></div>
    <div class="image04"></div>
    <div class="image05"></div>
    <div class="image06"></div>
    <div class="image07"></div>
    <div class="image08"></div>
    <div class="image09"></div>
    <div class="image10"></div>
    <div class="image11"></div>
    <div class="image12"></div>
  </div>
</template>

<style lang="scss" scoped>
html, body { padding: 0; margin: 0; }
.image-grid {
  display: flex;
  flex-wrap: wrap;
}
.image-grid div {
  width: 25%;
  height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  // float: left;
}
@media (max-width: 480px) {
  .image-grid {
    flex-direction: column;
    flex-wrap: nowrap;
    div {
      width: 100%;
    }
  }
}

.image01 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-01.jpg'); }
.image02 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-02.jpg'); }
.image03 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-03.jpg'); }
.image04 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-04.jpg'); }
.image05 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-05.jpg'); }
.image06 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-06.jpg'); }
.image07 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-07.jpg'); }
.image08 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-08.jpg'); }
.image09 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-09.jpg'); }
.image10 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-10.jpg'); }
.image11 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-11.jpg'); }
.image12 { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-12.jpg'); }
</style>>
