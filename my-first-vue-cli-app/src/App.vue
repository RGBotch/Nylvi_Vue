<template>
    <div id="app">
        <main>
            <header id="petit">
                <div id="haut">
                    <div id="burger">
                        <img src="../public/image/menuBurger.svg"/>
                        <img src="../public/image/CDBurger.svg"/>
                    </div>
                    <div id="logo">
                        <router-link to="/">
                            <img src="../public/image/vinyle.svg"/>
                            <p id="titreSite">Nylvi</p>
                        </router-link>
                    </div>
                    <div id="connexion">
                        <router-link to="connexion"><img class="photoProfil" src="../public/image/connexion.jpg"/></router-link>
                        <router-link class="bouton" to="panier">Panier</router-link>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><router-link to="Articles">Vinyles</router-link></li>
                        <li><router-link to="Articles">Collection</router-link></li>
                        <li><router-link to="Echange">Echanger</router-link></li>
                        <li><router-link to="BlogPosts">Blog</router-link></li>
                    </ul>
                </nav>
                <div id="rechercher">
                    <input type="search" id="barre" name="q">
                    <a id="loupe" href="article.html"><img src="../public/image/search.svg"/></a>
                </div>
            </header>
                <h1>h1</h1>
                <transition name="moveInUp">
                    <router-view/>
                </transition>
        </main>
        <footer>
            <div id="lien">
                <ul id="interne">
                    <li><router-link to="Home">Acceuil</router-link></li>
                    <li><router-link to="Articles">Vinyles</router-link></li>
                    <li><router-link to="Articles">Collection</router-link></li>
                    <li><router-link to="Echange">Echanger</router-link></li>
                    <li><router-link to="BlogPosts">Blog</router-link></li>
                    <li><router-link to="Artistes">Artiste</router-link></li>
                </ul>
                <ul id="mention">
                    <li><a href="#">API</a></li>
                    <li><a href="#">partenaire</a></li>
                    <li><a href="#">Mention légales</a></li>
                </ul>
                <ul id="reseau">
                    <li><a href="#"><img class="iconReseau" src="../public/image/twitter.svg"/></a></li>
                    <li><a href="#"><img class="iconReseau" src="../public/image/facebook.svg"/></a></li>
                    <li><a href="#"><img class="iconReseau" src="../public/image/instagram.svg"/></a></li>
                </ul>
            </div>
            <p id="faitPar">Site fait par <a href="https://www.3prod.com">Romain Cabane</a></p>
        </footer>
    </div>
</template>



