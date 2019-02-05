import { findIndex } from 'lodash';
import types from './mutation-types';
import { type } from 'os';

export default {
  [types.SAVE_CATEGORIES](state, categories) {
    // eslint-disable-next-line
    state.categories = categories;
  },
  [types.SAVE_JOKE](state, joke) {
    state.jokes.push(joke);
  },
  [types.REMOVE_JOKE](state, jokeId) {
    const index = findIndex(state.jokes, { id: jokeId });
    state.jokes.splice(index, 1);
  },
  [types.SELECT_CATEGORY](state, categoryName) {
    // eslint-disable-next-line
    state.selectedCategory = categoryName;
  },
  [types.REMOVE_ALL_JOKES](state) {
    state.jokes.length = 0;
    state.jokes = [];
  },
};
