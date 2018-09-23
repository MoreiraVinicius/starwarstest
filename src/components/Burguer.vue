<template>
    <div>
        <div id="container">
          <div id="burger" @click="isActive = !isActive" :class="{active: isActive}">
                  <div class="bun top"></div>
                  <div class="filling"></div>
                  <div class="bun bottom"></div>
          </div>
        </div>

        <nav :class="{show: isActive}">
        <ul>
            <li>
            <a href="#">Home</a>
            </li>
            <li class="green">
            <a href="#">Jedi</a>
            </li>
            <li class="red">
            <a href="#">Sith</a>
            </li>
            <li class="yellow">
            <a href="#">Sentinel</a>
            </li>
            <li class="purple">
            <a href="#">Samuel L. Jackson</a>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data: function(){
    return{
      isActive: false
    }
  }
};
</script>

<style lang="scss">
@import "~scss/burguer/styles";
</style>