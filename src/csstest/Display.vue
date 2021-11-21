<template>
  <h1>h1</h1>
  <span>span</span>
  <p>
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
  </p>
  <div>
    <i>list</i>
    <i>list</i>
    <i>list</i>
  </div>
  <div class="ser">
    <div>mob</div>
    <div>web</div>
  </div>
  <!-- overflow auto 는 필요하지 않은 스크롤 바를 없애준다 -->
  <p class="overflow">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    When an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting.
    Remaining essentially unchanged.
    It was popularised in the 1960s simply dummy text printing standard dummy text.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  </p>
</template>

<style lang="scss" scoped>
.overflow {
  text-align: left;
  background: silver;
  border: solid 1px;
  height: 100px;
  overflow: auto;
  // text-align: justify;
}
.ser {
  display: table;
  width: 100%;
  border: 1px solid;
  div {
    display: table-cell;
    width: 50%;
  }
}
div {
  i {
    display: list-item;
  }
}
h1 {
  background: blue;
  color: #fff;
  width: 300px;
  display: inline;
}
span {
  background: blue;
  color: #fff;
  width: 300px;
  display: block;
}
p {
  text-align: center;
  a {
    width: 40px;
    height: 40px;
    margin: 3px;
    background: blue;
    color: white;
    text-decoration: none;
    display: inline-block;
    line-height: 40px;
  }
}
</style>>
