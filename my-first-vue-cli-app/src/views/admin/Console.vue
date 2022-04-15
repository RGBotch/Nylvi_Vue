<template>
    <div>
            <section id="ajoutCarrousel">
                <h2>Edition Carrousel Dernier ajout</h2>
                    <div>
                        <div>
                            <input type="file" id="avatar" name="avatar" accept="image/jpg,image/JPG,image/jpeg">
                            <input type="text" class="titreAjout" placeholder="titre du vinyle"/>
                            <input type="submit">
                        </div>
                        <div v-for="produit in produits" :key="produit.id" to="Articles">
                            <p class='titreVinyle'>{{produit.nom}}</p>
                        </div>
                    </div>
            </section>
            <section id="blogPosts">
                <h2>Le Blog</h2>
                <div id="appercu">
                    <article class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                    <article class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                    <article class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                </div>
            </section>
            <section id="artiste">
                <input type="text" class="titreAjout" placeholder="titre du post"/>
                <textarea name="creerTexte" rows="10em">
                </textarea>
            </section>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default ({
   name: 'BlogPost',
   components:{
       Filtre,
   },
   computed: {
        ...mapState(['posts']),
        ...mapGetters(['getPost']),
    }
})

import {mapState} from 'vuex'
export default ({
   name: 'Console',
   computed: {
       ...mapState(['posts']),
       ...mapState(['produits'])
   },
   methods:{
   }
})
</script>
