<template>
  <div>
      <div class="col s12 m7">
        <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <p>{{ singleJoke.value }}</p>
          </div>
          <div class="card-action">
            <a
              @click="removeJoke(singleJoke.id)"
              class="waves-effect waves-light btn">
              remove joke
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleJoke',
  props: {
    singleJoke: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeJoke(jokeId) {
      this.$store.dispatch('removeJoke', jokeId);
    },
  },
};
</script>

<style lang="scss" scoped>
.card{
  min-width: 300px;
  max-width: 350px;
}
</style>
