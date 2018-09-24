<template>
    <div class="columns is-gapless is-centered is-vcentered main">
        <div class="column is-4">
            <article class="message">
                <div class="message-header has-background-danger">
                    <p>Dark</p>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
            <div class="buttons is-centered">
                <span class="button is-success is-large is-outlined" @click="getRandomValue">NEXT</span>
            </div>
        </div>
    </div>
    
</template>

<script>
import { getResult } from "@/services/";
export default {
  methods: {
    getRandomValue() {
      getResult("films");
    },
    data: function(){
        return{
            getResultByCategory: null
        }
    }
  }
};
</script>

<style lang="scss">
</style>