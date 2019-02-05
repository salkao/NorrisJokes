<template>
  <div class="back">
    <div class="container" >
    <div class="row">
      <div v-for="(joke, index) in jokes" :key="index" class="col s12 m3 l3">
        <single-joke :single-joke="joke"/>
      </div>
    </div>
    </div>


  </div>
</template>

<script>
import singleJoke from './singleJoke.vue';
import { filter } from 'lodash';

export default {
  name: 'jokesToDisplay',
  components: {
    singleJoke,
  },
  computed: {
    jokes() {
      if(this.$store.getters.selectedCategory === null){
        return this.$store.getters.jokes;
      }
      return _.filter(this.$store.getters.jokes, joke => joke.category == this.$store.getters.selectedCategory);
    },
  },
};
</script>

<style lang="scss" scoped>

.container{
  padding-top: 90px;
}
.col{
}
</style>
