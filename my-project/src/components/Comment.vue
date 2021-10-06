<template>
  
<div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">

            <div class="headings d-flex justify-content-between align-items-center mb-3">
                <h5>Commentaire (les plus récent)</h5>
               
            </div>

            <div class="card p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user d-flex flex-row align-items-center"> <img src="https://media-exp1.licdn.com/dms/image/D4E35AQEhyxGkAMVzIw/profile-framedphoto-shrink_400_400/0/1632160979791?e=1633615200&v=beta&t=RnRR77IchikLEFSYMOlaoWZCS_HFto1EhQTP0dLG7-Y" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">Axel_Demmorest</small> <small class="font-weight-bold">Hmm, Quel beau blog</small></span> </div> <small>Il y a 3 jours</small>
                </div>
                <div class="action d-flex justify-content-between mt-2 align-items-center">
                    <div class="reply px-4"> <small>Supprimer</small> <span class="dots"></span> <small>Répondre</small>  </div>
                    <div class="icons align-items-center"> <i class="fa  text-warning"></i> <i class="fa fa-check-circle-o check-icon"></i> </div>
                </div>
            </div>

            <div class="card p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user d-flex flex-row align-items-center"> <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGn6xtkVxW5aw/profile-displayphoto-shrink_400_400/0/1633370868683?e=1639008000&v=beta&t=jca3pwSP_pheIlUglkl_yarbS6BJeS1o7WhBCODpVdA" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">Merwan_Laouni</small> <small class="font-weight-bold">Quel beau travail! </small></span> </div> <small>Il y a 2 jours</small>
                </div>
                <div class="action d-flex justify-content-between mt-2 align-items-center">
                    <div class="reply px-4"> <small>Supprimer</small> <span class="dots"></span> <small>Répondre</small>  </div>
                    <div class="icons align-items-center"> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                </div>
            </div>

            <div class="card p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user d-flex flex-row align-items-center"> <img src="https://madeinfoot.ouest-france.fr/photos/ligue-des-champions/2021/zoom/ldc-20210929090458-2102.jpg" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">Lionel_Messi</small> <small class="font-weight-bold">C'est possible d'écrire un blog? </small></span> </div> <small>Il y a 10 heures</small>
                </div>
                <div class="action d-flex justify-content-between mt-2 align-items-center">
                    <div class="reply px-4"> <small>Supprimer</small> <span class="dots"></span> <small>Répondre</small>  </div>
                    <div class="icons align-items-center"> <i class="fa  text-muted"></i> <i class="fa fa-star-o text-muted"></i> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                </div>
            </div>

            <div class="card p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user d-flex flex-row align-items-center"> <img src="https://media-exp1.licdn.com/dms/image/C5635AQH5vjbSRidBEg/profile-framedphoto-shrink_400_400/0/1612904511699?e=1633615200&v=beta&t=GrJVUK0WgoLTQA0BuSwNtfQS35KOakK0v7IVKpp9L08" width="30" class="user-img rounded-circle mr-2"> <span><small class="font-weight-bold text-primary">Majchrzak_alexis</small> <small class="font-weight-bold text-primary">@Merwan_Laouni</small> <small class="font-weight-bold text-primary">@Axel_Demmorest</small> <small class="font-weight-bold">Merci pour vos retour </small></span> </div> <small>Il y a 4 heures </small>
                </div>
                <div class="action d-flex justify-content-between mt-2 align-items-center">
                    <div class="reply px-4"> <small>Supprimer</small> <span class="dots"></span> <small>Répondre</small>  </div>
                    <div class="icons align-items-center"> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
export default {

    name: "Comment"

}
</script>

<style>

.card {
    border: none;
    box-shadow: 5px 6px 6px 2px #e9ecef;
    border-radius: 4px
    
}

.dots {
    height: 4px;
    width: 4px;
    margin-bottom: 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block
}

.badge {
    padding: 7px;
    padding-right: 9px;
    padding-left: 16px;
    box-shadow: 5px 6px 6px 2px #e9ecef
}

.user-img {
    margin-top: 4px
}

.check-icon {
    font-size: 17px;
    color: #c3bfbf;
    top: 1px;
    position: relative;
    margin-left: 3px
}

.form-check-input {
    margin-top: 6px;
    margin-left: -24px !important;
    cursor: pointer
}

.form-check-input:focus {
    box-shadow: none
}

.icons i {
    margin-left: 8px
}

.reply {
    margin-left: 12px
}

.reply small {
    color: #b7b4b4
}

.reply small:hover {
    color: green;
    cursor: pointer
}

</style>