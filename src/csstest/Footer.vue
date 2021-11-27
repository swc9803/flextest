<template>
  <div class="cont">
    <div class="wrapper">
      <div id="header">header</div>
      <div id="container">
        <h2>main content</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores aliquid consequatur eum illo ut excepturi ullam! Quibusdam distinctio magni hic veritatis, eaque placeat numquam et velit similique aut omnis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores aliquid consequatur eum illo ut excepturi ullam! Quibusdam distinctio magni hic veritatis, eaque placeat numquam et velit similique aut omnis!
        </p>
      </div>
      <footer>footer</footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cont {
  margin:0;
  padding:0;
  height :100%;
}
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
}
#container {
  flex: 1;
}
footer{
  padding: 30px 0;
  background: #333;
  color:#fff;
}
</style>>
