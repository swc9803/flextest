<template>
<!-- template-areas -->
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
html, body {
  box-sizing: border-box;
  background-color: #ffeead;
  height: 100%;
  padding: 10px;
  margin: 0px;
}
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
  grid-gap: 3px;
  grid-template-columns:repeat(12,1fr);
  grid-template-rows:50px 200px 50px;
  grid-template-areas:
    ". . . . h h h h h h . ."
    "m m m m c c c c c c c c"
    ". f f f f f f f f f f f";
}
/*
grid-row-start / grid-column-start / grid-row-end / grid-column-end | itemname;
*/
.header {
   grid-area:1/1/2/-1;
}

.menu {
  grid-area:m;
}

.content {
  grid-area:c;
}

.footer {
  grid-area:f;
}

</style>
