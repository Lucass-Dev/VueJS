import Vue from "vue";
import Vuex from "vuex";
import articles from "./articles.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogdata: articles,
  },
  mutations: {
    addPost(state, post) {
      state.blogdata.articles.push(post);
    },
    removePostByIndex(state, index) {
      state.blogdata.articles.splice(index, 1);
    },
  },
  actions: {
    addPost(context, post) {
      context.commit("addPost", post)
    },
    removePostByID(context, index) {
      context.commit("removePostByIndex", index);
    },
  },
  modules: {},
});
