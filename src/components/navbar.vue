<template>
  <div class="navbar">
    <span class="title">The Fajita-tron</span>
    <router-link :to="{ name: 'fajita-maker' }">
      Make A Fajita
    </router-link>
    <router-link :to="{ name: 'meats' }">
      Meat List
    </router-link>
    <router-link :to="{ name: 'veggies' }">
      Veggie List
    </router-link>
    <router-link :to="{ name: 'toppings' }">
      Toppings List
    </router-link>
    <router-link :to="{ name: 'complitas' }">
      Completed Fajitas (Compl-itas)
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    background: #006341;
    padding: 20px;
    color: #fff;
  }
  .title {
    font-size: 30px;
    font-weight: 600;
  }
  a  {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: #CCC;
  }
</style>