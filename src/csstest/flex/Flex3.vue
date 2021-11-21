<template>
  <div class="container">
    <section class="main-content">
      <div class="panel">
        <h1>Main Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolorem beatae, voluptatibus, dolore ab animi repellat saepe cum, praesentium in incidunt sunt quod asperiores a rem necessitatibus. Quod cum, blanditiis.</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/laptop001.jpg" alt="laptop" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam adipisci pariatur aperiam, cupiditate aspernatur aut eligendi laudantium facilis delectus maxime hic, asperiores cum temporibus, nihil. Rerum magnam, repellendus enim libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat nisi porro modi odio recusandae nostrum dicta asperiores id, facilis, expedita magni dolore, tempore velit debitis inventore iure libero in!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque reprehenderit iusto nam suscipit, aspernatur esse. Eum minus, saepe, alias est molestiae libero, sit voluptate sed quo dicta quibusdam nam consectetur!</p>
        <h3>Subtitle</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit numquam nemo voluptates quis doloribus atque aliquam nisi commodi tenetur quasi perspiciatis eum quisquam quaerat eius odit repellendus, temporibus, minima, consectetur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius veritatis vero asperiores error optio, praesentium ipsum impedit! Officia sed debitis, dolore, non praesentium cupiditate dicta itaque ratione doloribus quod consequuntur!</p>
      </div>
    </section>

    <aside class="sidebar">
    <div class="panel">
      <h3>Item 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque atque repellat accusantium provident ipsum!</p>
    </div>
    <div class="panel">
      <h3>Item 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="panel">
      <h3>Item 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque atque ab sapiente enim!</p>
    </div>
    <div class="panel">
      <h3>Item 4</h3>
      <p>Neque voluptatem necessitatibus praesentium, mollitia laboriosam provident! Amet, veritatis.</p>
    </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
* { box-sizing: border-box; }
html, body {
  background: #333338;
  font-family: Georgia, serif;
  font-size: 16px;
  color: #444;
}
.container {
  display: flex;
}
.main-content {
  flex: 3;
}
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // flex-wrap: wrap;
  // align-content: space-between;
}
h1,h2,h3,h4,h5,h6 {
  font-family: Arial, sans-serif;
}
.main-content .panel img {
  float: left;
  margin: 0 10px 0 0;
}
.main-content, .sidebar {
  margin: 10px;
  background: #eee;
  padding: 6px;
}
.panel {
  background: #fff;
  padding: 20px;
  margin: 10px;
}
</style>>
