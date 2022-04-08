<template>
    <section>
                <div id="separe">
                    <div id="gauche">
                        <div>
                            <img class="photoProfil" src="../public/image//pablo.jpg"/>
                            <p>Nom du Demandeur</p>
                            <button class="bouton" onclick="location.href='articles.html'">Voir la Collection</button>
                        </div>
                        <p>V proposé:</p>
                        <img class="cover" src="../public/image/college.jpg"/>
                    </div>
                    <div id="droite">
                        <div>
                            <img class="photoProfil" src="../public/image/image/pablo.jpg"/>
                            <p>Nom du Propriétaire</p>
                            <button class="bouton" onclick="location.href='articles.html'">Voir la Collection</button>
                        </div>
                        <p>V demandé:</p>
                        <img class="cover" src="../public/image/image/heart.jpg"/>
                    </div>
                </div>
                <div id="tchat">
                    <div id="discussion">
                        <p class="demandeMessage">Votre Vinyle m'interresse</p>
                        <p class="demandeMessage">Je vous propose College Dropout en échange</p>
                        <p class="offreMessage">Sa peut m'interresser aussi de l'échanger</p>
                        <p class="demandeMessage">Cool comment on peut se rencontrer ? 06......</p>
                    </div>
                    <div id="ecrire">
                        <input type="text" id="message"/>
                        <input class="bouton" type="submit" id="envoyer" value="Envoyer">
                    </div>   
                </div>
                <div id="actionProduit">
                    <div class="border">
                        <button class="bouton">Probleme</button>
                    </div>
                    <div class="border">
                        <button class="bouton">Adjugé</button>
                    </div>
                    <div class="border">
                        <button class="bouton">Info</button>
                    </div>
                </div> 
            </section>
</template>