<template>
  <div>
    <div class="row">
      <div v-for="(joke, index) in jokes" :key="index" class="col s3">
        <single-joke :single-joke="joke"/>
      </div>
    </div>
  </div>
</template>

<script>
import singleJoke from './singleJoke.vue';

export default {
  name: 'jokesToDisplay',
  components: {
    singleJoke,
  },
  computed: {
    jokes() {
      return this.$store.getters.jokes;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
