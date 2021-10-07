<template>
  
<div>
  <div class="fond" >
      <div class="card bg-dark text-white">
          <img src="https://www.dorisvoyages.com/wp-content/uploads/2014/10/about-us.jpg" class="card-img" alt="img" >
          <div class="card-img-overlay">
            <h5 class="card-text mt-5 fs-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae non esse at aliquam consectetur, pariatur ad? Consequuntur deserunt voluptate ipsum temporibus accusamus. Ad accusantium, quod incidunt necessitatibus nesciunt voluptatem ut? </h5>
            <p class="card-text mt-5 fs-4 "> Projet VuesJS  </p>
          </div>
      </div>

    </div>

    <Us/>
    <Comment/>

  

</div>



</template>

<script>
import Us from "../components/Us.vue"
import Comment from "../components/Comment.vue"


export default {
  components: { Us,Comment }
}
</script>

<style>

.fond h5 {
  background-color: black ;
  opacity: 0.55 !important;
  color: white;
  margin-top: 8% !important;
  font-size: 25px !important;
}

.fond p {
  margin-top: 12% !important;
  font-size: 25px !important;
  color: black !important;

}





@media screen and (min-width: 376px) and (max-width: 450px) {     /*style petites-moyennes tablettes */

    
.fond h5 {
  font-size: 10px !important;
    margin-top: -3% !important;

}


.fond p {
  font-size: 10px !important;
  margin-top: 17% !important;
}
    
  }




  @media screen and (min-width: 321px) and (max-width: 375px) {  /*style smartphones et petites tablettes en portrait*/

.fond h5 {
  font-size: 10px !important;
    margin-top: -3% !important;

}


.fond p {
  font-size: 10px !important;
  margin-top: 12% !important;
}
    
  }
  
  

    @media screen and (max-device-width: 320px) {   /*style petits smartphones en voie de disparition*/
      
        
.fond h5 {
  font-size: 10px !important;
    margin-top: -3% !important;

}


.fond p {
  font-size: 10px !important;
  margin-top: 10% !important;
}
    
  }



</style>