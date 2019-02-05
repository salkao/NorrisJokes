<template>
  <div>
    <nav class="grey darken-3 bar">
      <div class="nav-wrapper">
        <div class="row">
          <div class="col s2 m2 l2 first">
            <img src="../assets/icon.png" alt="" id="logo">
            <span id="logoText"> <span id="norris">Norris</span>Jokes</span>
          </div>
          <div class="col s2 m2 l2">
            <a
              id="dropdown"
              class='dropdown-trigger btn grey darken-4'
              data-target='dropdown1'>
              Select a category
            </a>
            <ul id='dropdown1' class='dropdown-content'>
              <li
                v-for="(category, index) in categories"
                :key="index"
                @click="selectCategory(category)" >
                <a class="dropDownText" href="#!">
                  {{ category }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col s2 m2 l2">
            <a
              v-if="selectedCategory"
              @click="removeCategory()"
              class="waves-effect grey darken-4 btn"
              id="selectedCat">
              {{ selectedCategory }}
            </a>
            <a v-else class="waves-effect grey darken-4 btn" id="selectedCat">ALL CATEGORIES</a>
          </div>
          <div class="col s2 m2 l2"></div>
          <div class="col s2 m2 l2">
            <a
              @click="fetchJoke()"
              class="waves-effect grey darken-4 btn"
              id="crackJoke">
              crack a joke
            </a>
          </div>
          <div class="col s2 m2 l2">
            <a
              @click="removeAllJokes()"
              class="waves-effect grey darken-4 btn"
              id="crackJoke">
              clear all jokes
            </a>
          </div>
        </div>
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
    removeAllJokes() {
      this.$store.dispatch('removeAllJokes');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@media only screen and (max-width: 800px) {
  a{
    font-size: 6px;
  }

  #logoText{
    display: none;
  }
  #norris{
    display: none;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 999px) {
  a{
    font-size: 10px;
  }
  #logoText{
    display: none;
  }
  #norris{
    display: none;
  }
}
.bar{
  position: fixed;
  z-index: 2;
}
.btn{
  color: #9e9e9e;
}
#logoText{
  font-size: 29px;
  width: 70px;
  float: left;
}
#norris{
  font-weight: bolder;
  color: black;
}

.first{
  height: 64px;

}
#logo{
  width: 70px;
  height: 55px;
  margin-top: 3px !important ;
  float: left;
}
ul {
  color: #212121;
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
  background-color: #212121;
}
.dropDownText {
  color: #bdbdbd !important;
}
.dropDownText:hover{
  color: #212121 !important;

}
</style>
