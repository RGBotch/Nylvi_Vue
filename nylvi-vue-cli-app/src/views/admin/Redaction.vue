<template>
    <div>
        <h1>Ecrire un Post</h1>
            <router-link class="bouton" to="Console">Retour console</router-link>
            <section id="flux">
                <div>
                    <input type="file" id="postImg" name="imagePost" accept="image/jpg, image/JPG, image/jpeg">
                    <input type="submit">
                </div>
                <div id="redaction">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>

                        <textarea name="creerTexte" rows="10em" placeholder="introduction">
                        </textarea>

                        <input type="text" class="accrocheAjout" placeholder="Accrcoche"/>

                        <textarea name="creerTexte" rows="10em" placeholder="Corpus">
                        </textarea>

                        <textarea name="creerTexte" rows="10em" placeholder="Conlusion">
                        </textarea>
                </div>
            </section>
    </div>
</template>