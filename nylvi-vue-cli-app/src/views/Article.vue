<template>
    <div>
        <section id="produit" v-for="(product,index) in products" :key="index">
            <article v-if="productId == product.id">
                <aside>
                    <div class="champs">
                        <label>Titre :</label><p>{{product.name}}</p>
                    </div>
                    <div class="champs">
                        <label>Artiste :</label><p>{{product.artiste_id}}</p>
                    </div>
                    <div class="champs">
                        <label>Date :</label><p>{{product.date}}</p>
                    </div>
                    <div class="champs">
                        <label>Description :</label><p>{{product.description}}</p>
                    </div>
                    <div class="champs">
                        <label>Taille :</label><p>{{product.size}}</p>
                    </div>
                    <div class="champs">
                        <label>Possession :</label><p>{{product.possede}}</p>
                    </div>
                </aside>
                <div id="imagesProduit">
                    <img id="grande" v-bind:src="product.cover"/>
                    <div id="autresImages">
                        <img class="petite" v-bind:src="product.cover"/>
                        <img class="petite" v-bind:src="product.cover"/>
                    </div>
                </div>
            </article>
            <div id="actionProduit" v-if="productId == product.id">
                <div class="border">
                    <router-link class="bouton" to="Articles">Possédé</router-link>
                </div>
                <div class="border">
                    <button class="bouton" @click="AjoutCollection()">Ajouter</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default ({
    name: 'Article',  
    computed: mapState({
      products: state => state.products,
    }),
    data(){
        return{
            productId:this.$route.params.id
        }
    },
    methods:{
        AjoutPanier() {
            this.$store.dispatch('AjoutProductCollection', {
                product : this.product,
                quantite : 1
            });
        },
        AjoutCollection() {
          this.$store.dispatch('AjoutProductCollection', {
            product : this.product,
            quantite : 1
          });
        },
      ...mapActions({'loadProduct': "fetchProducts"}),
    },
    beforeMount() {
      this.loadProduct();
    }
})
</script>