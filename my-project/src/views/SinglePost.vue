<template>
  <div class="d-flex flex-column w-75">
    <div>
      <img
        :src="blogdata.articles[getId].urlToImage"
        alt="image post"
        class="w-100"
      />
    </div>
    <div class="text-start">
      <h2 class="fw-bold my-4 text-center">
        {{ blogdata.articles[getId].title }}
      </h2>
      <p class="mb-4">
        <i class="fas fa-user me-1"></i>
        <span class="fs-5 me-5">{{
          blogdata.articles[getId].author
        }}</span>
        <i class="far fa-calendar-alt"></i> {{ blogdata.articles[getId].publishedAt|dateFormat }}
      </p>

      <p>
        <span class="fw-bold">Introduction au Post :</span>
        {{ blogdata.articles[getId].description }}
      </p>

      <p>
        <span class="fw-bold">Contenu du Post : </span>
        <!-- {{ blogdata.articles[getId].content }} -->
        <MarkViewer />
      </p>
    </div>
  </div>
</template>

<script>
import MarkViewer from '../components/MarkViewer.vue'

export default {
  name: "SinglePost",
  components: {
    MarkViewer
  },
  methods: {
  },
  computed: {
    blogdata() {
      return this.$store.state.blogdata;
    },
    getId() {
      return this.$route.params.id;
    },
  },
  beforeMount() {
    this.$store.commit("setMarkText", this.blogdata.articles[this.getId].content);
  }
};
</script>

<style></style>
