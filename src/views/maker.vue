<template>
  <div class="maker">
    <H1>Fajita-tron Assembler</H1>
    <h2>Select your ingredients</h2>
    <div class="ingredients">
      <div>
        <div class="title">Meats</div>
        <select v-model="meat">
          <option v-for="meat in meats" :key="meat">{{ meat }}</option>
        </select>
      </div>
      <div>
        <div class="title">Veggies</div>
        <select v-model="veggie">
          <option v-for="veggie in veggies" :key="veggie">{{ veggie }}</option>
        </select>
      </div>
      <div>
        <div class="title">Toppings</div>
        <select v-model="topping">
          <option v-for="topping in toppings" :key="topping">{{ topping }}</option>
        </select>
      </div>
    </div>
    <h2>This fajita currently has:</h2>
    <div class="fajita">
      <div>A warm flour tortilla</div>
      <div v-show="meat.length > 0">{{ meat }}</div>
      <div v-show="veggie.length > 0">{{ veggie }}</div>
      <div v-show="topping.length > 0">{{ topping }}</div>
      <button @click="addComplita">Wrap this fajita up!</button>
    </div>
    <div v-if="complitas.length > 0" class="complitas">
      <h2>Complitas list</h2>
      <div v-for="complita in complitas" :key="complita.id">
        {{ complita.id }} - Fajita with {{ complita.meat }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'FajitaMaker',
    props: [],
    components: {},
    computed: {
      ...mapState({
        meats: 'meats',
        veggies: 'veggies',
        toppings: 'toppings',
        complitas: 'complitas'
      })
    },
    data() {
      return {
        meat: '',
        veggie: '',
        topping: ''
      }
    },
    created() {
    },
    mounted() {
    },
    updated() {
    },
    destroyed() {
    },
    methods: {
      addComplita() {
        const complita = {
          id: 1 + this.complitas.length,
          meat: this.meat,
          veggie: this.veggie,
          topping: this.topping
        };
        this.$store.dispatch('addComplita', complita)
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