<template>
  <section class="container">
    <section class="articles">
      <article>
        <h1>Incidunt tenetur debitis iste</h1>
        <small>December 15, 2016</small>
        <p>Nisi ex minima fuga cum omnis! Sequi modi nulla, quod voluptate ea quam in, natus fugiat et quibusdam quas sed vel incidunt.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facilis esse libero quos corporis obcaecati qui molestiae officia sit, numquam maxime fuga aut alias ex a commodi optio doloribus eos.</p>
        <h3>Nihil id Soluta</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iste sed eaque aperiam tempora vel repudiandae impedit quia qui sequi saepe eveniet ex dolore doloremque vero, omnis suscipit voluptatum placeat!</p>
      </article>
    </section>
    <aside>
      <h4>Subscribe for Updates</h4>
      <p>Et quisquam dolores eius dignissimos voluptates.</p>
      <form>
        <input type="text" placeholder="First Name"/>
        <input type="email" placeholder="email@address.com"/>
        <button type="submit">Sign Me Up!</button>
      </form>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
* { box-sizing: border-box; }
html, body {
  background-color: #f2f2f2;
  color: #444;
  font-family: Helvetica;
}
h1,h2,h3,h4,h5,h6 { margin: 0; }
h1 { font-size: 1.6em; }

.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
}

article, aside { margin: 20px; }
.articles { flex: 3; }
article {
  background-color: #fff;
  border-top: 4px solid #F25F29;
  padding: 20px;
  flex-wrap: wrap;
}
@media screen and (max-width: 480px) {
  // .container {
  //   flex-wrap: wrap;
  // }
  // .articles, aside {
  //   width: 100%;
  //   flex: none;
  // }
  .container {
    flex-direction: column;
  }
  aside {
    order: -1;
  }
}
aside {
  padding-top: 24px;
  flex: 1;
}
aside p { font-size: 12px; }

small { color: #bbb;}

form input {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px 4px;
  border: 1px solid #bbb;
}

form button {
  display: block;
  width: 100%;
  background-color: #354AA3;
  color: white;
  border: none;
  padding: 20px 4px;
}
</style>>
