<template>
  <div class="maker">
    <H1>Complita: {{ id }}</H1>
    <div>Warm flour tortilla</div>
    <div v-show="complita.meat.length > 0">Meat: {{ complita.meat}}</div>
    <div v-show="complita.veggie.length > 0">Veggie: {{ complita.veggie }}</div>
    <div v-show="complita.topping.length > 0">Topping: {{ complita.topping }}</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'FajitaMaker',
    props: ['id'],
    computed: {
      ...mapState({
        complitas: 'complitas'
      })
    },
    created() {
      this.complita = this.complitas.find(complita => this.id === complita.id);
    },
    data() {
      return {
        complita: {}
      }
    }
  }
</script>

<style scoped lang="scss">

  .fajita {
    margin: 50px;
  }

  .ingredients {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 50px;
  }

  button {
    padding: 30px;
    font-size: 20px;
    margin: 20px;
  }
</style>