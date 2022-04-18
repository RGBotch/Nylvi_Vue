<template>
    <div>
        <router-link class="bouton" to='BlogPosts'>retour Blog</router-link>
        <section id="post" v-for="(post,index) in posts" :key="index">
            <h1 v-if="postId == post.id">{{post.nom}}</h1>
            <div id="intro" v-if="postId == post.id">
                {{post.introduction}}
            </div>
            <div class="paragraphGauche" v-if="postId == post.id">
                <div class="corp">
                    {{post.introduction}}
                </div>
                <img class="imageCorp" v-bind:src="post.image"/>
            </div>
            <div class="paragraphDroite" v-if="postId == post.id">
                <img class="imageCorp" v-bind:src="post.image"/>
                <div class="corp">
                    {{post.introduction}}
                </div>
            </div>
            <div id="conclusion" v-if="postId == post.id">
                {{post.introduction}}
            </div>
        </section>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default ({
   name: 'Post',
   computed: {
       ...mapState(['posts']),
       ...mapGetters(['getPost'])
   },
   data(){
        return{
            postId:this.$route.params.id
        }
    }
})
</script>