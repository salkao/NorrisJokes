import types from './mutation-types';

export default {
  [types.SAVE_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  [types.SAVE_JOKE](state, joke) {
    state.jokes.push(joke);
  },
};
