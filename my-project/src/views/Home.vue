<template>
  <div class="home bg-light" id="infinite-scroll">
    
    <div class="article border border-3 border-dark rounded m-5" v-for="(article, index) in visibleArticles" :key="index">
      <h4 class="m-5">{{ article.title }}</h4>
      <p class="m-5">{{ article.description }}</p>
      <p>Publishing date : {{ article.publishedAt|dateFormat }}</p>
      <router-link :to="`/article/${index}`"><button class="btn btn-dark m-5">Lire +</button></router-link>
    </div>

    <div class="position">
      <span v-if="loading"><button class=" loading"></button> <p class="chargement" >Chargement en cours ...</p> </span>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { load } from '../js/home.js'
import { scrollTop } from '../js/home.js'
import { sleep } from '../js/home.js'


export default {
  
  name: 'Home',

  data(){
    return{
      loading: false,
      blogdata: this.$store.state.blogdata,
      visibleArticles: [],
    }
    
  },

  mounted(){
    console.log(this.blogdata);
    scrollTop()
    this.blogdata.articles.forEach(articles => {
      if (articles.isVisible) {
        this.visibleArticles.push(articles)
      }
    });
    load(this.testCb)
  },

  methods:{

    logfunction(){
      console.log(this);
    },

    testCb(){
      this.loading = true
      sleep(1500).then(() =>{
          let isVisibleCount = 0;
          this.blogdata.articles.forEach(element => {
        if (element.isVisible) {
          console.log(element);
          isVisibleCount ++
        }
      });
      for (let i = isVisibleCount; i < (isVisibleCount + 5) ; i++) {
        console.log(i);
        this.blogdata.articles[i].isVisible = true;
        this.visibleArticles.push(this.blogdata.articles[i])
        }
      this.loading = false
      })
      if (this.visibleArticles.length >= this.blogdata.articles.length) {
        this.loading = false
      }
    }
  }
}
</script>

<style>

  .loading{
    z-index: 9999 !important;
  }
  .loading {
    height: 40px;
    width: 40px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: 2px solid rgb(0, 0, 0);
    border-top-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    animation: spinner3 800ms ease infinite;
    margin-bottom: 5% !important;
    }

    .chargement {

      margin-top: -4% !important;
    font-size: 25px !important ;

    }


    @keyframes spinner3 {
    to {
    transform: rotate(360deg);
    }
    } 

    .article:hover{
      transform: scale(1.05) ;
      transition: 1s;
    }
    .article{
      transition: all 1s ease-in-out;
    }

</style>
