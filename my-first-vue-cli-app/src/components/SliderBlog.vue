<template>
    <section id="blogPosts">
        <h2>Blog Posts</h2>
        <div id="appercu">
            <article v-for="post in posts" class="extrait" v-bind:id="post.id" :key="post.id">
                <h3>{{post.nom}}</h3>
                <p>{{post.extrait}}</p>
                <router-link class="bouton" v-bind:to="{ name: 'Post', params: { id: post.id }}">Voir</router-link>
            </article>
        </div>
        <div class="border">
            <router-link class="bouton" to="BlogPosts">Vers Blog</router-link>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default ({
   name: 'sliderBlog',
    computed: {
        ...mapState(['posts']),
        getPost () {
            return this.$store.state.posts.find(post => post.id === this.$route.params.id);
        }
    }
})
</script>
