<template>
  <section id="panier">
                <div>
                    <p>produits</p>
                    <p>quantité</p>
                    <p>prix</p>
                    <p>total Ligne</p>
                    <p>supprimer</p>
                </div>
                <div id="produitsPanier" >
                    <div v-for="panier in paniers" class="ligne" v-bind:id="panier.id" :key="panier.id">
                        <a href="#" class="produit"><img v-bind:src="panier.image"/><p>{{panier.nom}}</p></a>
                        <button @click="enleveProduit(panier)" @change="calculTotalLigne(paniert)">-</button>
                        <input type="number" v-bind:data-price="panier.prix" class="quantite" v-bind:value='panier.quantite'>
                        <button @click="ajouteProduit(panier)" @change="calculTotalLigne(panier)">+</button>
                        <span class="prix">{{panier.prix}}€</span>
                        <span><span class="ligneTotal" @change="calculTotalLignes(panier)">{{panier.ligne}}</span><span>€</span></span>
                        <button class="supprimer" type="button" @click="supprimerLigne(panier)">X</button>
                    </div>
                </div>
                <div>
                    <button class="bouton" onclick="location.href='#'">Annuler</button>
                    <p id="total">{{calculTotalLignes(paniers)}}€</p>
                </div>
                <div>
                    <button class="bouton" onclick="location.href='#'">Retour Articles</button>
                    <button class="bouton" onclick="location.href='#'">Vérouiller</button>
                </div>
                <Formulaire/>
            </section>
</template>

<script>

import Formulaire from '../components/Formulaire.vue'

import {mapState} from 'vuex'

export default{
    name:'panier',
    components: {
        Formulaire
    },
    computed: {
       ...mapState(['paniers']),
    },
    methods:{
        ajouteProduit: function (panier) {
            panier.quantite++;
        },
        enleveProduit: function (panier) {
            if (panier.quantite !== 0)
                panier.quantite--
        },
        calculTotalLigne: function (panier) {
            console.log("totalLigne")
            panier.ligne = panier.prix * panier.quantite,
            panier.calculTotalLignes()
        },
        calculTotalLignes: function () {
            // console.log("totalPanier")
            // let total= 0
            // array.forEach(panier in paniers){
            //     total = panier.ligne;
            // }
            // return total
        },
        enleverPanier(itemId) {
            this.$store.dispatch('enleverPanier', itemId)
        },
        supprimerLigne: function (panier) {
            console.log("supprimer")
            panier.parentElement.remove(),
            panier.calculTotalLignes()
        }
    }  
}
</script>

