<template>
  <div class="admin">
    <div class="formulaire m-auto">
      <form @submit.prevent class="d-flex flex-column border border-dark p-3">
        <div class="d-flex justify-content-between mb-3">
          <div>
            <label for="author" class="text-left">Auteur :</label>
            <input v-model="author" type="text" id="author" class="ms-2 ps-1" placeholder="Nom de l'auteur" />
          </div>
          <div>
            <label for="title">Titre :</label>
            <input v-model="title" type="text" id="title" class="ms-2 ps-1" placeholder="Titre du post" />
          </div>
          <div>
            <label for="intro">Intro :</label>
            <input v-model="description" type="text" id="intro" class="ms-2 ps-1" placeholder="Intro du post" />
          </div>

          <button @click="addPost">Ajouter</button>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <label for="content" class="">Contenu</label>
          <textarea v-model="content" type="text" id="content" class="ms-2 ps-1 w-100" placeholder="Contenu du post" />
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
  data() {
    return {
      author: '',
      title: '',
      description: '',
      content: '',
      urlToImage: 'https://www.nzherald.co.nz/resizer/7NY_0eA8BUWVhh6tfKe9bGad6m4=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/22OLS334ZGFMAV3522OAO7HSIA.jpg',
      publishedAt: new Date()
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', {
        isVisible: false,
        author: this.author,
        title: this.title,
        description: this.description,
        content: this.content,
        publishedAt: this.publishedAt,
        urlToImage: this.urlToImage
      })
      this.author = this.title = this.description = this.content = ''
    },
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
  width: 95%;
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
