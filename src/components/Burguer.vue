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
            <li :class="label.color" v-for="(label, index) in labels" :key="index">
              <a href="#" @click="selectCategory(label.title, label.color)">{{label.title | capitalize}}</a>
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
        { title: "planets", color: "gold" },
        { title: "starships", color: "purple" },
        { title: "vehicles", color: "red" },
        { title: "people", color: "green" },
        { title: "films", color: "blue" },
        { title: "species", color: "orange" }
      ]
    };
  },
  methods: {
    selectCategory: function(category, colorWindow) {
      this.$emit("selected-category", { category, colorWindow });
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