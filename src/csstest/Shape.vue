<template>
  <h2>Announcement</h2>
  <img class="megaphone" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/megaphone.png">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aspernatur pariatur eius, in neque quibusdam dignissimos ratione veniam! Laborum quis unde fuga quibusdam iste voluptas dolorum, doloremque illum molestias sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis necessitatibus alias unde rem quae soluta consectetur. Reprehenderit dolorum ducimus at itaque, sapiente ea eligendi, excepturi quibusdam. Inventore suscipit, ex voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero officia ipsam aliquam nihil vitae, quasi. Perferendis ullam tempora totam dolore optio minima, laudantium nemo corporis tenetur non, et mollitia hic.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis soluta est neque aut eveniet nostrum libero laborum esse, aspernatur eligendi! Culpa nemo voluptates saepe pariatur ea. Minus odit in ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam aliquid quis ipsa eos excepturi, facere vel, saepe accusantium. Pariatur hic enim eaque corporis nostrum labore laborum eligendi fuga magni.</p>
  <img class="desktop" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/desktop01.png">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptate vitae, eligendi eveniet suscipit earum est expedita inventore aliquam perspiciatis deleniti neque distinctio quidem quam quibusdam. Laborum expedita neque repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad est voluptate sint fugiat quos illum, beatae neque repellendus eius saepe dolorem obcaecati expedita, ea et quas quisquam suscipit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odit incidunt, deleniti veniam quasi quos illo aliquam facere velit, nulla magni, placeat? Adipisci quisquam vel, ab quo at veniam ipsa.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo omnis debitis vitae quae nulla itaque in sequi quas natus deserunt repudiandae, molestiae necessitatibus non minima dolores, velit officia. Commodi, mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, eaque nostrum, ratione delectus rerum doloremque voluptatem nam repellat ipsam doloribus aliquam quibusdam, quasi minima magnam consequuntur? Repellat, odio, nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores officia adipisci eos. Similique excepturi fugit et quis perferendis sunt dolorem optio! Possimus rerum iure laborum, reprehenderit harum culpa ipsa?</p>
  <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/485050/Acme_Insignia2.png">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptate, eaque at expedita molestias nemo amet eum! Distinctio a pariatur, ut fugit iure minima nesciunt, eius tenetur officia, excepturi odio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla cupiditate et provident, error numquam saepe odio accusamus recusandae explicabo deleniti sed quod similique rerum minus magnam consectetur laboriosam veniam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptates voluptate ipsa ullam sapiente eveniet cum nostrum, facilis totam provident fugit quibusdam, ea iusto incidunt non corporis labore omnis accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, expedita. Obcaecati commodi ullam ratione eum quod nam assumenda ex at et incidunt, ab, est, recusandae quasi nisi voluptates sit repudiandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis blanditiis quidem at vero modi illo ea similique dicta amet nemo! Alias natus ipsam soluta commodi maiores vero atque illo veritatis?</p>

  <div class="box">
    <svg>
      <circle cx="100px" cy="100px" r="100px" class="shape"></circle>
      <text y="15px" class="wrap">
        Here is a long text string that is perfectly wrapped inside a circle.Here is a long text string that is perfectly wrapped inside a circle.Here is a long text string that is perfectly wrapped inside a circle.
      </text>
    </svg>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body { font-family: sans-serif; font-size: 18px; }
.megaphone {
  float: left;
  shape-outside: circle(50%);
  margin-right: 10px;
}
.desktop {
  float: left;
  margin-right: 10px;
  shape-outside: inset(40px 20px 40px 0);
}
.logo {
  float: left;
  margin-right: 10px;
  shape-outside: polygon(62px -2px, 210px -1px, 284px 107px, 227px 215px)
}
</style>
