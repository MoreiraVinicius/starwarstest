<template>
  <div id="app">
    <router-view></router-view>
    <!-- div :id="'stars'+index" v-for="index in 3" :key="index"></div -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Droid+Sans:400,700);
* { padding: 0; margin: 0; }

body, html, #App
{
  width: 100%;
  background-color: black;
	height: 100%;
	font-family: "Droid Sans", arial, verdana, sans-serif;
	font-weight: 700;
	color: #ff6;
	overflow: hidden;
}

</style>
