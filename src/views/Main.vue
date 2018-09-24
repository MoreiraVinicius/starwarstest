<template>
    <div  class="main">
        <Burguer @selected-category="updateCategory" />
        <div class="columns is-gapless is-centered is-vcentered main">
            <div class="column is-4">
                <article class="message">
                    <div class="message-header is-size-4" :style="{backgroundColor: colorWindow}" >
                        <p class="hcenter">{{name}}</p>
                    </div>
                    <div class="message-body">
                        <p v-for="(parameter, index) in parametersCategory.datasets" :key="index"><span class="has-text-weight-bold">{{index}}</span>: {{parameter}}</p>
                        <div vif="category != 'films'" class="has-text-centered"><span>Featured in {{countFilms}}</span></div>
                    </div>
                </article>
                <div class="buttons is-centered">
                    <span class="button is-success is-large is-outlined" @click="getRandomValueByCategory">NEXT</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Burguer from "@/components/Burguer";
import { getResult } from "@/services/";
export default {
  data: function() {
    return {
      category: "planets",
      parametersCategory: {},
      labelsParameters: [],
      name: null,
      countFilms: [],
      colorWindow: "gold"
    };
  },
  methods: {
    getRandomValueByCategory() {
      new Promise((resolve, reject) => {
        getResult(this.category, resolve, reject);
      })
        .then(res => {
          this.parametersCategory = res;
          this.labelsParameters = Object.keys(res.datasets);
          this.name = res.title;
          this.countFilms =
            res.countFilms > 1
              ? res.countFilms + " films"
              : res.countFilms + " film";
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateCategory({ category, colorWindow }) {
      this.category = category;
      this.colorWindow = colorWindow;
      this.getRandomValueByCategory();
    }
  },
  beforeMount() {
    this.getRandomValueByCategory();
  },
  components: { Burguer }
};
</script>

<style lang="scss">
.hcenter {
  margin: 0 auto;
}
</style>