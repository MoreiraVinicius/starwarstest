<template>
  <div id="app">
    <audio autoplay loop>
      <source src="@/assets/Star_Wars_Theme_Song_By_John_Williams.mp3" type="audio/mpeg">
    </audio>
    <div :id="'stars'+index" v-for="index in 3" :key="index"></div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style lang="scss">
@import "~bulma";
@import "~scss/background-parallax/styles";
@import url(http://fonts.googleapis.com/css?family=Droid+Sans:400,700);


* {
  padding: 0;
  margin: 0;
}

body,
html,
#app,
.main {
  width: 100%;
  background-color: black;
  height: 100%;
  font-family: "Droid Sans", arial, verdana, sans-serif;
  font-weight: 700;
  color: #ff6;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transition: opacity .8s;
  opacity: 0;
}
</style>
