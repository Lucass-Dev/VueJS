<template>
  <div class="admin">
    <div class="formulaire my-5 mx-auto">
      <form @submit.prevent class="d-flex flex-column border border-dark p-4">
        <div class="d-xxl-flex d-xl-flex d-lg-flex d-md-flex justify-content-between mb-3">
          <div>
            <label for="author" class="text-left">Auteur :</label>
            <input
              v-model="author"
              type="text"
              id="author"
              class="ms-2 ps-1"
              placeholder="Nom de l'auteur"
            />
          </div>
          <div>
            <label for="title">Titre :</label>
            <input
              v-model="title"
              type="text"
              id="title"
              class="ms-2 ps-1"
              placeholder="Titre du post"
            />
          </div>
          <div>
            <label for="intro">Intro :</label>
            <input
              v-model="description"
              type="text"
              id="intro"
              class="ms-2 ps-1"
              placeholder="Intro du post"
            />
          </div>

          <button @click="addPost(index)" class="btn btn-dark">
            {{ isUpdate ? "Modifier" : "Ajouter" }}
          </button>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <label for="content" class="">Contenu</label>
          <textarea
            v-model="content"
            type="text"
            id="content"
            class="ms-2 ps-1 w-100"
            placeholder="Contenu du post"
          />
        </div>
        <div v-if="content != ''">
          <h4 class="mb-3 mt-4">Prévisualisation</h4>
          <MarkViewer class="border border-black" />
        </div>
      </form>
    </div>

    <table class="table table-bordered table-striped mt-4">
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
          <td class="overflow-auto">{{ article.title }}</td>
          <td>{{ article.description }}</td>
          <td>{{ article.content }}</td>
          <td>
            <button @click="editPost(index)" class="me-1 btn btn-dark">
              Modifier
            </button>
            <button @click="deletePost(index)" class="btn btn-dark">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MarkViewer from "../components/MarkViewer.vue";

export default {
  name: "Admin",
  components: {
    MarkViewer
  },
  data() {
    return {
      isUpdate: false,
      index: null,
      author: "",
      title: "",
      description: "",
      // content: this.text,
      urlToImage:
        "https://www.nzherald.co.nz/resizer/7NY_0eA8BUWVhh6tfKe9bGad6m4=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/22OLS334ZGFMAV3522OAO7HSIA.jpg",
      publishedAt: new Date(),
    };
  },
  methods: {
    addPost(index = null) {
      if (!this.isUpdate) {
        this.$store.dispatch("addPost", {
          isVisible: this.lengthIsLessThanFive,
          author: this.author,
          title: this.title,
          description: this.description,
          content: this.content,
          publishedAt: this.publishedAt,
          urlToImage: this.urlToImage,
        });
      } else {
        this.$store.dispatch("editPost", {
          index,
          post: {
            isVisible: this.blogdata.articles[index].isVisible,
            author: this.author,
            title: this.title,
            description: this.description,
            content: this.content,
            publishedAt: this.blogdata.articles[index].publishedAt,
            urlToImage: this.blogdata.articles[index].urlToImage,
          },
        });
        this.isUpdate = false;
      }
      this.author = this.title = this.description = this.content = "";
    },
    deletePost(index) {
      this.$store.dispatch("removePostByID", index);
    },
    editPost(index) {
      this.isUpdate = true;
      this.index = index;
      this.author = this.blogdata.articles[index].author;
      this.title = this.blogdata.articles[index].title;
      this.description = this.blogdata.articles[index].description;
      this.content = this.blogdata.articles[index].content;
    },
  },
  computed: {
    blogdata() {
      return this.$store.state.blogdata;
    },
    lengthIsLessThanFive() {
      return this.blogdata.articles.length < 5;
    },
    content: {
      get() {
        return this.$store.state.markText;
      },
      set(value) {
        this.$store.commit("setMarkText", value);
      },
    },
  },
  mounted() {
    this.$store.commit("setMarkText", '');
  }
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
