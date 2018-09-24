<template>
    <div  class="main">
        <Burguer @selected-category="updateCategory" />
        <div class="columns is-gapless is-centered is-vcentered main">
            <div class="column is-4">
                <article class="message">
                    <div class="message-header has-background-danger is-size-4">
                        <p class="hcenter">{{name}}</p>
                    </div>
                    <div class="message-body">
                        <p v-for="(parameter, index) in parametersCategory.datasets" :key="index">{{Object.keys(parametersCategory.datasets)[index]}}: {{parameter}}</p>
                        <div vif="category != 'films'" class="has-text-centered"><span>Featured in 1 film.</span></div>
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
      name: null
    };
  },
  methods: {
    getRandomValueByCategory() {
        new Promise((resolve, reject) => {
            getResult(this.category, resolve, reject);
        }).then(res =>{
            this.parametersCategory = res;
            this.labelsParameters = Object.keys(res.datasets);
            this.name = res.title;
        })
            
    },
    updateCategory(category){
        this.category = category;
        this.getResultByCategory();
    }
  },
  beforeMount() {
    this.getRandomValueByCategory();
  },
  watch:{
      parametersCategory: function(val){
          console.log("Novo parameters: ", val)
      }
  },
  components: { Burguer }
};
</script>

<style lang="scss">
.hcenter {
  margin: 0 auto;
}
</style>