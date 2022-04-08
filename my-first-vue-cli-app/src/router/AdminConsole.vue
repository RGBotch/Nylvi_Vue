<template>
    <div>
        <button class="bouton" onclick="location.href='artistes.html'">DASHBOARD</button>
            <section id="ajoutCarrousel">
                <h2>Dernier ajout Carrousel</h2>
                    <div>
                        <div>
                            <input type="file" id="avatar" name="avatar" accept="image/jpg, image/JPG, image/jpeg">
                            <input type="text" class="titreAjout" value="titre vinyle"/>
                            <input type="submit">
                        </div>
                    </div>
            </section>
            <section id="creer">
                <h2>Ouvrez votre Collection et échanger des Vinyles</h2>
                <textarea name="creerTexte" rows="10em">
                </textarea>
            </section>
            <section id="blogPosts">
                <h2>Le Blog</h2>
                <div id="appercu">
                    <article class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                    <article class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                    <article class="extrait">
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <textarea name="creerTexte" rows="10em">
                        </textarea>
                    </article>
                </div>
            </section>
            <section id="artiste">
                <input type="text" class="titreAjout" placeholder="titre du post"/>
                <textarea name="creerTexte" rows="10em">
                </textarea>
            </section>
    </div>
</template>