<template>
  <div>
    <router-link class="dd" :to="{ name: 'Home'}">
      링크이벤트
    </router-link>
  </div>
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
</style>>
