<template>
<!-- auto-fit, min-max -->
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body{
  padding-top: 150px;
}
.container > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #ffeead;
}

html, body {
  background-color: #ffeead;
  margin: 10px;
}

.container > div:nth-child(1n) {
  background-color: #96ceb4;
}

.container > div:nth-child(3n) {
  background-color: #88d8b0;
}

.container > div:nth-child(2n) {
  background-color: #ff6f69;
}

.container > div:nth-child(4n) {
  background-color: #ffcc5c;
}

.container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns:minmax(200px, 70%) minmax(200px,30%);
  grid-auto-rows: 80px;
  grid-template-rows:repeat(3,100px);
}

</style>
