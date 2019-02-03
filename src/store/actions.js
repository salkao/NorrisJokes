import types from './mutation-types';

export default {
  saveCategories({ commit }, categories) {
    commit(types.SAVE_CATEGORIES, categories);
  },
  saveJoke({ commit }, joke) {
    commit(types.SAVE_JOKE, joke);
  },
  removeJoke({ commit }, jokeId) {
    commit(types.REMOVE_JOKE, jokeId);
  },
};