<template>
    <div>
        <h1>Dashboard</h1>
        <router-link class="bouton" to="Console">Retour console</router-link>
            <section id="statistique">
            </section>
            <section id="board">
                <div id="ajoute">
                    <h3>Vinyles</h3> 
                    <div class="border">
                        <router-link class="bouton" to="AJouter">Ajouter un vinyle</router-link>
                    </div>
                    <div class="actualisation">
                        <ul>
                            <li><a href="admin-ajouter.html">actualisation n01</a></li>
                            <li><a href="admin-ajouter.html">actualisation n02</a></li>
                            <li><a href="admin-ajouter.html">actualisation n03</a></li>
                        </ul>
                    </div>
                </div>
                <div id="ecrire">
                    <h3>Posts</h3>
                    <div class="border">
                        <router-link class="bouton" to="Ajouter">Ajouter un post</router-link>
                    </div>
                    <div class="actualisation">
                        <ul>
                            <li><a href="admin-ecrire.html">actualisation n01</a></li>
                            <li><a href="admin-ecrire.html">actualisation n02</a></li>
                            <li><a href="admin-ecrire.html">actualisation n03</a></li>
                        </ul>
                    </div>
                </div>
                <div id="echange">
                    <h3>Posts</h3>
                    <div class="border">
                        <router-link class="bouton" to="AdminAJouter">Ajouter Vinyles</router-link>
                    </div>
                    <div class="actualisation">
                        <ul>
                            <li><a href="admin-echange.html">actualisation n01</a></li>
                            <li><a href="admin-echange.html">actualisation n02</a></li>
                            <li><a href="admin-echange.html">actualisation n03</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="artiste">
                <h2>Mode Accueil</h2>
                <div class="border">
                    <button class="bouton">Voir</button>
                </div>
            </section>
    </div>
</template>