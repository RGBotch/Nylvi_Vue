<template>
<section id='recent'>
    <h2>Dernier ajout</h2>
    <div id='wrapper'>
        <div class='carrousel'>
            <router-link v-for="produit in produits" :class="'plan p'+produit.id" :key="produit.id" to="Articles">
                <img class='cover' v-bind:src="produit.image"/>
                <p class='titreVinyle'>{{produit.nom}}</p>
            </router-link>
        </div>
    </div>
</section>
</template>

<script>

import {mapState} from 'vuex'
export default ({
   name: 'carroussel',
   computed: {
       ...mapState(['produits'])
   },
   methods:{
   }
})
</script>


