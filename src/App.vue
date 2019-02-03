<template>

  <div id="app">
    <DropDown/>
    <jokes-to-display/>
  </div>
</template>

<script>
import axios from 'axios';
import DropDown from './components/DropDown.vue';
import jokesToDisplay from './components/jokesToDisplay.vue';

export default {
  name: 'app',
  components: {
    DropDown,
    jokesToDisplay,
  },
  created: function () {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        this.$store.dispatch('saveCategories', response.data);
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
