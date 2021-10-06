<template>
  <div class="home" id="infinite-scroll">
    
    <div class="article border border-3 border-dark rounded m-5" v-for="(article, index) in visibleArticles" :key="index">
      <h4 class="m-5">{{article.title}}</h4>
      <p class="m-5">{{article.description}}</p>
      <p>Publishing date : {{article.publishedAt|dateFormat}}</p>
      <router-link :to="`/article/${index}`"><button class="btn btn-dark m-5">Lire +</button></router-link>
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

      sleep(2000).then(() =>{
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
      })
    }
  }
}
</script>

<style></style>
