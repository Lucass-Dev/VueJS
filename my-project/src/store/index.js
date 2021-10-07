import Vue from "vue";
import Vuex from "vuex";
import articles from "./articles.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogdata: articles,
    markText: ''
  },
  mutations: {
    addPost(state, post) {
      state.blogdata.articles.push(post);
    },
    removePostByIndex(state, index) {
      state.blogdata.articles.splice(index, 1);
    },
    editPost(state, data) {
      Vue.set(state.blogdata.articles, data.index, data.post)
    },
    setMarkText(state, text) {
      state.markText = text
    }
  },
  actions: {
    addPost(context, post) {
      context.commit("addPost", post)
    },
    removePostByID(context, index) {
      context.commit("removePostByIndex", index);
    },
    editPost(context, data) {
      context.commit("editPost", data)
    }
  },
  modules: {},
});
