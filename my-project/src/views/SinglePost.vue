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
        <i class="far fa-calendar-alt"></i> {{ dateFormat(blogdata.articles[getId].publishedAt) }}
      </p>

      <p>
        <span class="fw-bold">Introduction au Post :</span>
        {{ blogdata.articles[getId].description }}
      </p>

      <p>
        <span class="fw-bold">Contenu du Post : </span>
        {{ blogdata.articles[getId].content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  methods: {
    dateFormat(date) {
        return new Date(date).toLocaleDateString("fr-FR", {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        })
    }
  },
  computed: {
    blogdata() {
      return this.$store.state.blogdata;
    },
    getId() {
      return this.$route.params.id;
    }
  },
};
</script>

<style></style>
