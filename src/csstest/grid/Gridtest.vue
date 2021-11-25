<template>
  <div class="support-grid"></div>
  <div class="band">
    <div class="item-1">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);"></div>
        <article>
          <h1>International Artist Feature: Malaysia</h1>
          <span>Mary Winkler</span>
        </article>
      </a>
    </div>
    <div class="item-2">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png);"></div>
        <article>
          <h1>How to Conduct Remote Usability Testing</h1>
          <span>Harry Brignull</span>
        </article>
      </a>
    </div>
    <div class="item-3">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg);"></div>
        <article>
          <h1>Created by You, July Edition</h1>
          <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
          <span>Melody Nieves</span>
        </article>
      </a>
    </div>
    <div class="item-4">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);"></div>
        <article>
          <h1>How to Code a Scrolling “Alien Lander” Website</h1>
          <p>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p>
          <span>Kezz Bracey</span>
        </article>
      </a>
    </div>
    <div class="item-5">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg);"></div>
        <article>
          <h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
          <span>Rose</span>
        </article>
      </a>
    </div>
    <div class="item-6">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg);"></div>
        <article>
          <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
          <span>Marie Gardiner</span>
        </article>
      </a>
    </div>
    <div class="item-7">
      <a href="#" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png);"></div>
        <article>
          <h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
          <span>Kendra Schaefer</span>
        </article>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
html {
  background: #f5f7f8;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 20px 0;
}
h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}
.card span {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 2em 0 0 0;
}
.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
.card {
  background: #fff;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 0;
  transition: 0.4s;
}
.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, .2);
}
.thumb {
  padding-bottom: 60%;
  background-size: cover;
  background-position: center;
}
article {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}
article p {
  flex: 1;
}
@media screen and (min-width: 500px) {
  .band {
    grid-template-columns: 1fr 1fr;
  }
  .item-1 {
    grid-column: 1/3;
  }
}
@media screen and (min-width: 850px) {
  .band {
    grid-template-columns: repeat(4, 1fr);
  }
}
/* card */
</style>
