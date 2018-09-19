<template>
  <div id="app">
    <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
    <Opening />
  </div>
</template>

<script>
import Opening from './components/Opening.vue'

export default {
  name: 'app',
  components: {
    Opening
  }
}
</script>

<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Droid+Sans:400,700);
* { padding: 0; margin: 0; }

body, html, #App
{
	width: 100%;
	height: 100%;
	font-family: "Droid Sans", arial, verdana, sans-serif;
	font-weight: 700;
	color: #ff6;
	overflow: hidden;
}

</style>
