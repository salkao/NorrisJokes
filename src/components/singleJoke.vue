<template>
  <div>

        <div class="card horizontal grey darken-3">
          <div class="card-stacked">
            <div class="card-content">
              <p>{{ singleJoke.value }}</p>
            </div>
            <div class="card-action">
              <a id="button"
                @click="removeJoke(singleJoke.id)"
                class="waves-effect grey darken-4 btn">
                remove joke
              </a>
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
.card-content{
  color: #9e9e9e;
  font-weight: bolder;
}
.btn{
  color: #9e9e9e;
}
.card-action{
  border-color: #212121!important;
}
</style>
