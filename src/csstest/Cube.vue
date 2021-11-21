<template>
  <div class="wrapper">
    <div class="perspective">

      <input type="radio" id="rotate" name="switch">
      <label for="rotate">auto  </label>
      <input type="radio" id="front" name="switch">
      <label for="front">front  </label>
      <input type="radio" id="left" name="switch">
      <label for="left">left  </label>
      <input type="radio" id="back" name="switch">
      <label for="back">back  </label>
      <input type="radio" id="right" name="switch">
      <label for="right">right  </label>
      <input type="radio" id="top" name="switch">
      <label for="top">top  </label>
      <input type="radio" id="bottom" name="switch">
      <label for="bottom">bottom  </label>

      <div class="cube">
        <div class="front">
          <img src="@/assets/front.jpg">
        </div>
        <div class="back">
          <img src="@/assets/back.jpg">
        </div>
        <div class="top">
          <img src="@/assets/top.jpg">
        </div>
        <div class="bottom">
          <img src="@/assets/bottom.jpg">
        </div>
        <div class="left">
          <img src="@/assets/left.jpg">
        </div>
        <div class="right">
          <img src="@/assets/right.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
input {
  display: none;
  padding: 10px;
}
body {
  font-family: "Open Sans";
  line-height: 1.618em;
  color: #444;
  overflow-y: scroll;
}
.wrapper {
  max-width: 50rem;
  width: 100%;
  margin: 1rem auto;
  text-align: center;
}
.perspective {
  perspective: 2000px;
  position: relative;
  perspective-origin: 25rem -150px;
}
@keyframes rotate {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(180deg) }
}
.cube {
  position: relative;
  width: 400px;
  margin: 3.5rem auto;
  transition: 0.5s;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;
  div {
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: 0.95;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.front {
  transform: translateZ(200px);
}
.back {
  transform: translateZ(-200px) rotateY(180deg);
}
.left {
  transform: rotateY(-90deg) translateZ(200px);
}
.right {
  transform: rotateY(90deg) translateZ(200px);
}
.top {
  transform: rotateX(90deg) translateZ(200px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(200px);
}
#rotate:checked ~ .cube{
  animation: rotate 10s infinite linear;
}
#front:checked ~ .cube{
  animation: none;
  transform: none;
}
#back:checked ~ .cube{
  animation: none;
  transform: rotateY(180deg);
}
#right:checked ~ .cube{
  animation: none;
  transform: rotateY(-90deg);
}
#left:checked ~ .cube{
  animation: none;
  transform: rotateY(90deg);
}
#top:checked ~ .cube{
  animation: none;
  transform: rotateX(-90deg);
}
#bottom:checked ~ .cube{
  animation: none;
  transform: rotateX(90deg);
}
label {
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.5rem;
  background: #2980b9;
  color: #fff;
  margin: 0 0.25rem;
  transition: 0.25s;
}
input:checked + label {
  background: #3498db;
}
</style>>
