import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{

    produits: 
    [
      { id: 1, image: "../image/yesus.jpg", nom: "Yesus", auteur: "Kanye", date:2004 , prix: 15, taille:"-",possede:"12 membres",quantite: 0, ligne: 15},
      { id: 2, image: "../image/donda.jpg", nom: "Donda", auteur: "Kanye", date:2021 , prix: 20.5, taille:"-",possede:"12 membres",quantite: 0, ligne: 20.5 },
      { id: 3, image: "../image/college.jpg", nom: "College dropout", auteur: "Kanye", date:2004, taille:"-",possede:"12 membres",prix: 15, quantite: 0, ligne: 15},
      { id: 4, image: "../image/trone.jpg", nom: "Watch the trone", auteur: "Kanye", date:2021, taille:"-",possede:"12 membres",prix: 20.5, quantite: 0, ligne: 20.5 },
      { id: 5, image: "../image/heart.jpg", nom: "808 heartBreak", auteur: "Kanye", date:2004, taille:"-",possede:"12 membres",prix: 15, quantite: 0, ligne: 15},
      { id: 6, image: "../image/pablo.jpg", nom: "The life of pablo", auteur: "Kanye", date:2021, taille:"-",possede:"12 membres",prix: 20.5, quantite: 0, ligne: 20.5 },
      { id: 7, image: "../image/jesus.jpg", nom: "Jesus is King", auteur: "Kanye", date:2004, taille:"-",possede:"12 membres",prix: 15, quantite: 0, ligne: 15},
      { id: 8, image: "../image/dark.jpg", nom: "My beautiful dark fantasy", auteur: "Kanye", date:2021 , taille:"-",possede:"12 membres",prix: 20.5, quantite: 0, ligne: 20.5 }
    ],
    utilisateurs:
    [
      {identifiant:"Michel", motDePasse:"coucou"},
      {identifiant:"Admin", motDePasse:"toto"}
    ],
    posts:
    [
      { id: 1 , nom:"Techno Vinyle", image: "../image/yesus.jpg", introduction:"Il y a environ vingt ans, la techno a fait irruption dans la galaxie des musiques populaires.Suivant de près l’expansion du hip hop, cette nouvelle musique électronique s’est imposée comme l’une des composantes essentielles du paysage musical mondial, aux côtés du rock et du rap, donnant lieu à de nombreuses déclinaisons régionales et à un foisonnement stylistique considérable.A l’instar de toute culture musicale, la techno ne se limite pas à des sons. Elle recouvre tout un monde d’objets, d’outils, de lieux, de circulations, de façons d’être, de généalogies, de représentations, de savoirs.C’est cet assemblage qui en fait, plutôt qu’un style, un genre."},
      { id: 2 , nom:"Vinyle 2022", image: "../image/yesus.jpg", introduction:"Enn 2022 et tout"},
      { id: 3 , nom:"kanye Crash test", image: "../image/yesus.jpg", introduction:"Crash test Donda2"},
    ],
    paniers:[
      { id: 1, image: "../image/yesus.jpg", nom: "Yesus", auteur: "Kanye", date:2004 , prix: 15, quantite: 0, ligne: 15},
      { id: 2, image: "../image/donda.jpg", nom: "Donda", auteur: "Kanye", date:2021 , prix: 20.5, quantite: 0, ligne: 20.5 }
    ]
  },
  mutations: {

  },
  actions: {
    AjoutProduitPanier(){
      
    }
  },
  getters: {
    getProduit () {
      return this.$store.state.produits.find(produit => produit.id === this.$route.params.id);
    },
    getPost () {
      return this.$store.state.posts.find(post => post.id === this.$route.params.id);
    }
  }
})
