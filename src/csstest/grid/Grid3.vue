<template>
<!-- fr repeat -->
  <div class="container">
    <div class="header">HEADER</div>
    <div class="menu">MENU</div>
    <div class="content">CONTENT</div>
    <div class="footer">FOOTER</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #ffeead;
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
  height: 100vh;
  display: grid;
  grid-gap: 3px;
  grid-template: 100px auto 100px / 1fr 4fr;
}
.header {
  grid-column-start: 1;
  grid-column-end: 3;
  // grid-column: 1 / 3;
}

.footer {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
