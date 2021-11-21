<template>
  <nav class="main-nav">
    <ul class="menu">
    <li class="menu-home">
      <a>
      <i class="fa fa-home"></i>
      <div class="menu-text">
        <h4>HOME</h4>
        <p>Start Here</p>
      </div>
      </a>
    </li>
    <li class="menu-products">
      <a>
      <i class="fa fa-shopping-basket"></i>
      <div class="menu-text">
        <h4>PRODUCTS</h4>
        <p>Shop Now</p>
      </div>
      </a>
    </li>
    <li class="menu-blog">
      <a>
      <i class="fa fa-pencil"></i>
      <div class="menu-text">
        <h4>BLOG</h4>
        <p>My Thoughts</p>
      </div>
      </a>
    </li>
    <li class="menu-contact">
      <a>
      <i class="fa fa-phone"></i>
      <div class="menu-text">
        <h4>CONTACT</h4>
        <p>Get in Touch</p>
      </div>
      </a>
    </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
}
.main-nav {
 .menu {
    background-color: #eee;
    list-style: none;
    padding-left: 0;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
  }
}
.main-nav .menu li {
  padding: 4px;
  padding-top: 14px;
}
.main-nav .fa {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
}
.main-nav .menu-text {
  display: inline-block;
}
.main-nav h4, .main-nav p {
  margin: 0;
}
.main-nav p {
  font-size: 12px;
}
</style>>
