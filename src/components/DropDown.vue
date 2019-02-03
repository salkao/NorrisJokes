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
        v-if="categorySelected"
        @click="removeCategory()"
        class="waves-effect indigo darken-4 btn"
        id="selectedCat">
        {{ categoryName }}
      </a>
      <a v-else=""  class="waves-effect indigo darken-4 btn" id="selectedCat">ALL CATEGORIES</a>
      <a
        @click="fetchJoke()"
        class="waves-effect indigo darken-4 btn"
        id="crackJoke">
        crack a joke
      </a>

      <!-- Dropdown Structure -->
      <ul id='dropdown1' class='dropdown-content'>
      <li
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(index)" >
        <a href="#!">
          {{ category }}
        </a>
      </li>
  </ul>
    </div>
  </nav>
  <!-- Dropdown Trigger -->

</div>
<!-- Dropdown Structure -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'DropDown',
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
  },
  methods: {
    selectCategory(index) {
      this.categoryName = this.$store.getters.categories[index];
      this.categorySelected = true;
    },
    removeCategory() {
      this.categoryName = '';
      this.categorySelected = false;
    },
    fetchJoke() {
      const categoryParametar = `?category=${this.categoryName}`;
      axios.get(`https://api.chucknorris.io/jokes/random${this.categoryName ? categoryParametar : ''}`)
        .then((response) => {
          this.$store.dispatch('saveJoke', response.data);
        });
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
