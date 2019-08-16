<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/navbar'

  export default {
    name: 'Fajitatron',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 30px;
    color: #CE1126
  }

  button {
    background: #CE1126;
    color: #fff;
  }
</style>
