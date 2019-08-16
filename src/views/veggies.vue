<template>
  <div class="veggies">
    <H1>List of Veggies</H1>
    <div v-for="veggie in veggies" :key="veggie">
      {{ veggie }}
    </div>
    <input v-model="veggie">
    <button @click="addVeggie">Add Veggie</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'VeggieList',
    computed: {
      ...mapState({
        veggies: 'veggies'
      })
    },
    data() {
      return {
        veggie: ''
      }
    },
    methods: {
      addVeggie() {
        this.$store.dispatch('addVeggie', this.veggie);
        this.veggie = '';
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