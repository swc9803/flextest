<template>
  <div class="image-grid">
    <div class="image-row">
      <div class="image01"></div>
      <div class="image02"></div>
      <div class="image03"></div>
    </div>
    <div class="image-row">
      <div class="image04"></div>
      <div class="image05"></div>
    </div>
    <div class="image-row">
      <div class="image06"></div>
      <div class="image07"></div>
      <div class="image08"></div>
      <div class="image09"></div>
    </div>
    <div class="image-row">
      <div class="image10"></div>
      <div class="image11"></div>
      <div class="image12"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html, body { padding: 0; margin: 0; }

.image-row {
  display: flex;
  .image01 {
    flex: 1;
  }
  .image02 {
    flex: 1;
  }
  .image03 {
    flex: 2;
  }
  div {
    height: 240px;
    margin: 4px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
}
@media (max-width: 480px) {
  .image-row {
    flex-direction: column;
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
