<template>
<div>
    <div class="col s12 m7">
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6">
        </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:'singleJoke',
  props: {
    singleJoke: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.card horizontal{
  width: 100%;
}
</style>
