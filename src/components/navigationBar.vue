<template>
<div>
  <nav class="indigo darken-1">
    <div class="nav-wrapper">
      <a id="logo" href="" class="brand-logo">Logo</a>
      <a
        id="dropdown"
        class='dropdown-trigger btn indigo darken-4'
        data-target='dropdown1'>
        Select a category
      </a>
      <p>Selected category:</p>
      <a
        v-if="selectedCategory"
        @click="removeCategory()"
        class="waves-effect indigo darken-4 btn"
        id="selectedCat">
        {{ selectedCategory }}
      </a>
      <a v-else class="waves-effect indigo darken-4 btn" id="selectedCat">ALL CATEGORIES</a>
      <a
        @click="fetchJoke()"
        class="waves-effect indigo darken-4 btn"
        id="crackJoke">
        crack a joke
      </a>
      <ul id='dropdown1' class='dropdown-content'>
        <li
          v-for="(category, index) in categories"
          :key="index"
          @click="selectCategory(category)" >
          <a href="#!">
            {{ category }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'navigationBar',
  data() {
    return {
      categorySelected: false,
      categoryName: '',
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    selectedCategory() {
      return this.$store.getters.selectedCategory;
    },
  },
  methods: {
    selectCategory(category) {
      this.$store.dispatch('selectCategory', category);
    },
    removeCategory() {
      this.$store.dispatch('selectCategory', null);
    },
    fetchJoke() {
        this.$store.dispatch('saveJoke');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#selectedCat{
  position: absolute;
  top: 15px;
  margin-left: 100px;
}
#crackJoke{
  position: absolute;
  top: 15px;
  margin-left: 500px;
}
p{
  padding: 0;
  margin: 0;
  font-size: 18px;
}
#logo{
  left: 50px;
}
#dropdown{
  position: absolute;
  top: 15px;
  left: 170px;
}
ul {
  list-style-type: none;
  padding: 0;
  top: -45px;
  height: 500px;
  overflow: scroll !important;
  overflow-x: hidden !important;
}
li {
  display: inline-block;
  height: 5px;
}
a {
  color: #42b983;
}
</style>
