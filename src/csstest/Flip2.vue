<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li><a href="#" data-title="Home2"><span>Home</span></a></li>
      <li><a href="#" data-title="About Us2"><span>About Us</span></a></li>
      <li><a href="#" data-title="Products2"><span>Products</span></a></li>
      <li><a href="#" data-title="Blog2"><span>Blog</span></a></li>
      <li><a href="#" data-title="Contact Us2"><span>Contact Us</span></a></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

.main-nav {
  background-color: #298234;
  color: white;
  width: 100%;
  height: 80px;
}

.nav-list {
  text-align: center;
  list-style: none;
  padding-left: 0;
}

.nav-list li {
  display: inline-block;
  width: 160px;
  height: 40px;
  margin: 10px 5px;
  text-align: center;
  position: relative;
}

.nav-list li a {
  position: relative;
  width: 160px;
  height: 40px;
  display: block;
  color: white;
  line-height: 40px;
  text-transform: uppercase;
  text-decoration: none;
}

.nav-list li a::after {
  content: attr(data-title);
  background-color: #197224;
  display: block;
  width: 160px;
  height: 40px;
  position: absolute;
  top:0;
  transform: scaleY(0);
  transition: 0.7s;
  transform-origin: bottom;
}

.nav-list li a span{
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 40px;
  transition:0.6s;
  transform-origin: top;
}
.nav-list li a:hover span {
  transform: scaleY(0);
  background: #59b264;
}
.nav-list li a:hover:after {
  transform: scaleY(1);
}
</style>
