<template>
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body{padding:50px}
.container div {text-align: center; color:#fff;font-size: 2em;}
.container div:nth-child(1) {background: #96ceb4;}
.container div:nth-child(2) {background: #ff6f69;}
.container div:nth-child(3) {background: #88d8b0;}
.container div:nth-child(4) {background: #ffcc5c;}
.container div:nth-child(5) {background: #96ceb4;}
.container div:nth-child(6) {background: #ff6f69;}

.container{
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 100px 100px 200px;
  gap: 5px;
}
</style>
