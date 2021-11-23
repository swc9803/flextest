<template>
  <div class="card-container">
    <div class="card">
      <div class="side">
        <img src="@/assets/front.jpg">
      </div>
      <div class="side back">hi</div>
    </div>
  </div>
</template>

<script>
// import gsap from 'gsap'
// import { onMounted } from '@vue/runtime-core'

export default {
  setup () {
    // onMounted(() => {
    //   gsap.to('p', { xPercent: 50 })
    // })
  }
}
</script>

<style lang="scss" scoped>
body {
  font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
  margin: 12px 0;
}
.dd {
  width: 150px;
  height: 150px;
  background: red;
}
.card-container {
  position:relative;
  cursor: pointer;
  height: 150px;
  width: 150px;
  margin:100px;
  perspective: 600px;
}
.card {
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
}
.card:hover {
  transform: rotateY(180deg);
}
.side {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  backface-visibility: hidden;
}
.back {
  background: #eaeaed;
  color: #0087cc;
  text-align: center;
  line-height: 150px;
  transform: rotateY(180deg);
}
</style>
