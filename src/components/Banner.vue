<template>
    <div class="banner">
        <img src="@/assets/star.svg" alt="Star" class="banner__star">
        <img src="@/assets/wars.svg" alt="Wars" class="banner__wars">
        <h2 class="banner__line" ref="byline">The Vinicius Game</h2>
    </div>
</template>

<script>
export default {
  mounted() {
    let byline =  this.$refs.byline;
    let bylineText = byline.innerHTML;
    let bylineArr = bylineText.split(""); 
    byline.innerHTML = ""; 

    let span;
    let letter;

    bylineArr.map(res => {
      span = document.createElement("span"); 
      letter = document.createTextNode(res); 
      if (res == " ") {
        byline.appendChild(letter);
      } else {
        span.appendChild(letter);
        byline.appendChild(span); 
      }      
    })
  }
};
</script>

<style lang="scss">
@import "~scss/banner/styles";
</style>