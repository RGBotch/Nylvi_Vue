<template>
    <section>
                <div id="separe">
                    <div id="gauche">
                        <div>
                            <img class="photoProfil" />
                            <p>Nom du Demandeur</p>
                            <button class="bouton" onclick="location.href='articles.html'">Voir la Collection</button>
                        </div>
                        <p>V proposé:</p>
                        <img class="cover" />
                    </div>
                    <div id="droite">
                        <div>
                            <img class="photoProfil" />
                            <p>Nom du Propriétaire</p>
                            <button class="bouton" onclick="location.href='articles.html'">Voir la Collection</button>
                        </div>
                        <p>V demandé:</p>
                        <img class="cover"/>
                    </div>
                </div>
                <div id="tchat">
                    <div id="discussion">

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

<script>

export default ({
   name: 'Echanger'
})
</script>