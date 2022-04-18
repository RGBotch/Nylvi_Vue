<template>
    <div>
        <section id="produit" v-for="(produit,index) in produits" :key="index">
            <article v-if="produitId == produit.id">
                <aside>
                    <div class="champs">
                        <label>Titre :</label><p>{{produit.nom}}</p>
                    </div>
                    <div class="champs">
                        <label>Artiste :</label><p>{{produit.auteur}}</p>
                    </div>
                    <div class="champs">
                        <label>Date :</label><p>{{produit.date}}</p>
                    </div>
                    <div class="champs">
                        <label>Description :</label><p>{{produit.description}}</p>
                    </div>
                    <div class="champs">
                        <label>Taille :</label><p>{{produit.taille}}</p>
                    </div>
                    <div class="champs">
                        <label>Possession :</label><p>{{produit.possede}}</p>
                    </div>
                </aside>
                <div id="imagesProduit">
                    <img id="grande" v-bind:src="produit.image"/>
                    <div id="autresImages">
                        <img class="petite" v-bind:src="produit.image"/>
                        <img class="petite" v-bind:src="produit.image"/>
                    </div>
                </div>
            </article>
            <div id="actionProduit" v-if="produitId == produit.id">
                <div class="border">
                    <router-link class="bouton" to="Articles">Possédé</router-link>
                </div>
                <div class="border">
                    <button class="bouton" @click="AjoutPanier()">Ajouter</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default ({
    name: 'Article',  
    computed: {
       ...mapState(['produits']),
       ...mapGetters(['getProduit'])
    },
    data(){
        return{
            produitId:this.$route.params.id
        }
    },
    methods:{
        AjoutPanier() {
            this.$store.dispatch('AjoutProduitPanier', {
                produit : this.produit,
                quantite : 1
            });
        }
    }
})
</script>