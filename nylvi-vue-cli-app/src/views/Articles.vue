<template>
    <div>
        <Filtre/>
        <section id="vinyles">
            <article v-for="produit in produits" class="vinyle" v-bind:id="produit.id" :key="produit.id">
                <img class="cover" v-bind:src="produit.image"/>
                <p class="titreVinyle">{{produit.nom}}</p>
                <p class="auteurVinyle">{{produit.auteur}}</p>
                <p class="dateSortie">{{produit.date}}</p>
                <router-link class="bouton" v-bind:to="{ name: 'Article', params: { id: produit.id }}">Voir</router-link>
            </article>
        </section>
    </div>
</template>

<script>

import Filtre from '../components/Filtre.vue'

import {mapState} from 'vuex'

export default ({
   name: 'Articles',
   components:{
       Filtre,
   },
   computed: {
       ...mapState(['produits']),
   }
})
</script>

