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
                    <article v-for="post in posts" :key="post.id" to="BlogPost" class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                </div>
            </section>
    </div>
</template>

<script>

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
