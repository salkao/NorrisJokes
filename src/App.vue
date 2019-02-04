<template>
  <div id="app">
    <navigationBar/>
    <jokes-to-display/>
  </div>
</template>

<script>
import axios from 'axios';
import navigationBar from './components/navigationBar.vue';
import jokesToDisplay from './components/jokesToDisplay.vue';

export default {
  name: 'app',
  components: {
    navigationBar,
    jokesToDisplay,
  },
  mounted() {
    // eslint-disable-next-line
    M.AutoInit();
  },
  created() {
      this.$store.dispatch('saveCategories');
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
