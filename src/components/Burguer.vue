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
              <a href="#">{{label.title | capitalize}}</a>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false,
      labels: [
        { title: "planets", cor: "yellow" },
        { title: "starships", cor: "purple" },
        { title: "vehicles", cor: "red" },
        { title: "people", cor: "green" },
        { title: "films", cor: "blue" },
        { title: "species", cor: "seila" }
      ]
    };
  },
  methods: {
    selectCategory: function (category) {
      this.$emit('selected-category', category)
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="scss">
@import "~scss/burguer/styles";
</style>