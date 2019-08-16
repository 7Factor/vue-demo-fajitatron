<template>
  <div class="toppings">
    <H1>List of Toppings</H1>
    <div v-for="topping in toppings" :key="topping">
      {{ topping }}
    </div>
    <input v-model="topping">
    <button @click="addTopping">Add Topping</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ToppingList',
    computed: {
      ...mapState({
        toppings: 'toppings'
      })
    },
    data() {
      return {
        topping: ''
      }
    },
    methods: {
      addTopping() {
        this.$store.dispatch('addTopping', this.topping);
        this.topping = '';
      }
    }
  }
</script>

<style scoped lang="scss">

  button {
    padding: 10px;
    font-size: 20px;
    margin: 20px;
  }
</style>