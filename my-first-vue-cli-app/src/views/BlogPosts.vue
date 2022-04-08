<template>
    <div>
        <Filtre/>
        <section id="blogPosts">
            <div id="appercu">
                <article v-for="post in posts" class="extrait" v-bind:id="post.id" :key="post.id">
                    <h3>{{post.nom}}</h3>
                    <p>{{post.introduction}}</p>
                    <router-link class="bouton" v-bind:to="{ name: 'Post', params: { id: post.id }}">Voir</router-link>
                </article>
            </div>
        </section>
    </div>
</template>

<script>

import Filtre from '../components/Filtre.vue'

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
</script>
