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
            <li :class="label.cor" v-for="(label, index) in labels" :key="index">
              <a href="#">{{label.title}}</a>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data: function(){
    return{
      isActive: false,
      labels: [{title: "Planets", cor:"yellow"}, {title: "Spaceships", cor: "purple"}, {title: "Vehicles", cor: "red"}, {title: "People", cor: "green"}, {title: "Films", cor: "blue"}, {title: "Species", cor: "seila"}]
    }
  }
};
</script>

<style lang="scss">
@import "~scss/burguer/styles";
</style>