<template>
  <div class="flex-wrapper">
    <a href="" class="one">
      <div class="overlay">
        <div class="overlay-inner">
          <h2>Title #1</h2>
          <p>Fusce vulputate orci at nulla consequat, ac tincidunt quam ultrices.</p>
        </div>
      </div>
    </a>
    <a href="" class="two">
      <div class="overlay">
        <div class="overlay-inner">
          <h2>Title #2</h2>
          <p>Quisque facilisis enim eu mi condimentum, id interdum diam pharetra.</p>
        </div>
      </div>
    </a>
    <a href="" class="three">
      <div class="overlay">
        <div class="overlay-inner">
          <h2>Title #3</h2>
          <p>Donec laoreet enim sed risus suscipit, rutrum egestas ligula tristique.</p>
        </div>
      </div>
    </a>
    <a href="" class="four">
      <div class="overlay">
        <div class="overlay-inner">
          <h2>Title #4</h2>
          <p>Etiam porta, enim non vulputate consectetur, neque lectus finibus erat, eu. </p>
        </div>
      </div>
    </a>
    <a href="" class="five">
      <div class="overlay">
        <div class="overlay-inner">
          <h2>Title #5</h2>
          <p>Cras nunc augue, egestas sed maximus non, consectetur in nunc.</p>
        </div>
      </div>
    </a>
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
  font: normal 18px/1.5 "Helvetica Neue", sans-serif;
}
/*
https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-001.jpg
https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-002.jpg
https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-003.jpg
https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-004.jpg
https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-005.jpg
*/
* {
  color: white;
  overflow: hidden;
}
.flex-wrapper {
  display: flex;
  height: 100vh;
  a {
    flex: 1;
    transition: flex 0.35s;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;  //이미지의 센터가 중심
    background-size: cover; //이미지의 크기가 작아도 칸에 맞춰크기 조정
  }
  a:hover {
    flex: 3;
  }
  a.one {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-001.jpg);
  }
  a.two {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-002.jpg);
  }
  a.three {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-003.jpg);
  }
  a.four {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-004.jpg);
  }
  a.five {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/nav-005.jpg);
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 10px;
    transition: 0.35s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover .overlay {
    background: rgba(0, 0, 0, 0.6);
  }
}
@media screen and (max-width:800px) {
  .flex-wrapper {
    flex-direction: column;
  }
  .overlay-inner h2, .overlay-inner p {
    transform: none;
    opacity: 1;
    font-size: 2vw;
  }
}
</style>>
