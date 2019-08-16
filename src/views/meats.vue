<template>
  <div class="meats">
    <H1>List of Meats</H1>
    <div v-for="meat in meats" :key="meat">
      {{ meat }}
    </div>
    <input v-model="meat">
    <button @click="addMeat">Add Meat</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'MeatList',
    computed: {
      ...mapState({
        meats: 'meats'
      })
    },
    data() {
      return {
        meat: ''
      }
    },
    methods: {
      addMeat() {
        this.$store.dispatch('addMeat', this.meat);
        this.meat = '';
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