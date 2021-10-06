import Vue from "vue";
import Vuex from "vuex";
import articles from "./articles.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogdata: articles,
  },
  mutations: {
    addPost(state, data) {
      state.blogdata.articles.push(data);
    },
    removePostByIndex(state, index) {
      state.blogdata.articles.splice(index, 1);
    },
  },
  actions: {
    removePostByID(context, index) {
      context.commit("removePostByIndex", index);
    },
  },
  modules: {},
});
