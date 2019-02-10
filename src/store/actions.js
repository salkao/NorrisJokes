import axios from 'axios';
import types from './mutation-types';
import state from './state';

export default {
  saveCategories({ commit }) {
    axios.get('https://api.chucknorris.io/jokes/categories')
    .then((response) => {
      commit(types.SAVE_CATEGORIES, response.data);
    });
  },
  saveJoke({ commit }) {
    const cat = state.selectedCategory;
    const categoryParametar = `?category=${cat}`;
    axios.get(`https://api.chucknorris.io/jokes/random${cat ? categoryParametar : ''}`)
      .then((response) => {
        commit(types.SAVE_JOKE, response.data);
      });
  },
  removeJoke({ commit }, jokeId) {
    commit(types.REMOVE_JOKE, jokeId);
  },
  selectCategory({ commit }, categoryName) {
    commit(types.SELECT_CATEGORY, categoryName);
  },
  removeAllJokes({ commit }) {
    commit(types.REMOVE_ALL_JOKES);
  },
};
