<template>
<!-- fr repeat -->
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
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
body{padding:250px 50px}
.container div {text-align: center; color:#fff;font-size: 2em; background:#ccc;}
.container div:nth-child(1) {background: #96ceb4;}
.container div:nth-child(2) {background: #ff6f69;}
.container div:nth-child(3) {background: #88d8b0;}
.container div:nth-child(4) {background: #ffcc5c;}
.container div:nth-child(5) {background: #96ceb4;}
.container div:nth-child(6) {background: #ff6f69;}

.container {
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 50px);
  // grid-template: repeat(2, 50px) / repeat(3, 1fr); 위 두 개와 같음
  // grid-template-columns: 1fr 2fr 1fr; fr = 1:1:1
}
</style>
