<template>
  <div>
    <router-link class="dd" :to="{ name: 'Home'}">
      링크이벤트
    </router-link>
  </div>
  <div class="dds"></div>
</template>

<style lang="scss" scoped>
div {
  .dd {
    text-decoration-line: none;
    transition: 0.5s;
  }
  .dd:hover {
    background: blue;
    color: #fff;
  }
}
.dds {
  width: calc(100%/3);
  height: calc(100%/3);
  background: black;
}
</style>>
