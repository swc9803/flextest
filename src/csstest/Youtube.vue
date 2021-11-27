<template>
  <h1>iframe responsive</h1>
  <main class="cont">
    <h2>responsive youtube</h2>
    <hr>
    <h2>youtube</h2>

    <div class="resbox">
      <iframe class="target"
        src="https://www.youtube.com/embed/nsYwSbohQwQ?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <hr>
    <h2>vimeo</h2>
    <div class="resbox">
      <iframe class="target" src="https://player.vimeo.com/video/435746729?h=1f15819136&title=0&byline=0&portrait=0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.resbox {
  padding:72.43% 0 0 0;
  position: relative;
}
.target {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border: 0;
}
.cont {
  width: 80%;
  margin: 0 auto;
}
</style>>
