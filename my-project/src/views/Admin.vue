<template>
  <div class="admin">
    <div class="formulaire m-auto">
      <form class="d-flex flex-column border border-dark p-3">
        <div class="d-flex justify-content-between mb-3">
          <div>
            <label for="author" class="text-left">Auteur :</label>
            <input type="text" id="author" class="ms-2 ps-1" placeholder="Nom de l'auteur" />
          </div>
          <div>
            <label for="title">Titre :</label>
            <input type="text" id="title" class="ms-2 ps-1" placeholder="Titre du post" />
          </div>
          <div>
            <label for="intro">Intro :</label>
            <input type="text" id="intro" class="ms-2 ps-1" placeholder="Intro du post" />
          </div>

          <button>Ajouter</button>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <label for="content" class="">Contenu</label>
          <textarea type="text" id="content" class="ms-2 ps-1 w-75" placeholder="Contenu du post" />
        </div>
      </form>
    </div>

    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>Id</th>
          <th>Auteur</th>
          <th>Date</th>
          <th>Titre</th>
          <th>Intro</th>
          <th>Contenu</th>
          <th>Modifier | Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in blogdata.articles" :key="index">
          <td>{{ index }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.publishedAt | dateFormat }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.description }}</td>
          <td>{{ article.content }}</td>
          <td>
            <button class="me-1">Modifier</button><button @click="deletePost(index)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Admin",
  methods: {
    deletePost(index) {
      this.$store.dispatch('removePostByID', index)
    }
  },
  computed: {
    blogdata() {
      return this.$store.state.blogdata;
    },
  },
};
</script>

<style>
.admin,
.formulaire {
  width: 90%;
}
table {
  table-layout: fixed;
}
th,
td {
  overflow: auto;
  white-space: nowrap;
}
</style>
