<template>
<div id="letreiro">
    <p id="start">A pouco tempo, em um navegador muito longe daqui &hellip;</p>
	<Banner v-if="endStart" />
    <div id="titles">
        <div id="titlecontent">
            <p class="center">EPISODIO I<br />The Vinicius Game</p>
            <p>É um periodo de guerra. Vinicius Moreira, um jovem desenvolvedor luta para adpatar seu desafio em todos os navegadores da galaxia. Desafio esse imposto pelo onipotente Imperio B2W BIT como teste para fazer parte de sua infrantaria. </p>
			<p>O bravo Desenvolvedor encontra seu maior teste nas terras mais remotas e distantes da galaxia, tambem conhecido como Internet Explorer.  </p>
        </div>
    </div>
</div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  components: {
    Banner
  },
  created: function() {
    setTimeout(() => {
      this.endStart = true;
    }, 4000);
    setTimeout(() => this.$router.push({ path: "/main" }), 35000);
  },
  data: function() {
    return {
      endStart: false
    };
  }
};
</script>

<style lang="scss">
@import "~scss/placard/styles";
</style>