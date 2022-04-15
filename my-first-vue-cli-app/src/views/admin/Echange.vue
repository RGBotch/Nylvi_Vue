<template>
    <div>
        <h1>Archive des Echanges</h1>
            <router-link class="bouton" to="Console">Retour console</router-link>
            <section id="blogPosts">
                <div id="appercu">
                    <article v-for="post in posts" class="extrait" v-bind:id="post.id" :key="post.id">
                        <h3>{{post.date}}</h3>
                        <p>{{post.proprietaire}}</p>
                        <p>{{post.demandeur}}</p>
                        <p>{{post.nom}}</p>
                        <router-link class="bouton" v-bind:to="{ name: 'Echange', params: { id: post.id }}">Voir Echange</router-link>
                    </article>
                </div>
            </section>
    </div>
</template>

<script>

export default ({
   name: 'Echange'
})

</script>