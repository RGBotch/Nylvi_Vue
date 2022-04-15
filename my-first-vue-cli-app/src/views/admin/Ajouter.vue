<template>
    <div>
        <router-link class="bouton" to="Console">Retour console</router-link>
            <section id="flux">
                    <article>
                        <label>Titre h1</label>
                        <input type="text" class="titreAjout" placeholder="titre du post"/>
                        <div>
                            <label>Titre</label>
                            <input type="text" placeholder="titre du Vinyle"/>
                        </div>
                        <div>
                            <label>Artiste V:</label>
                            <input type="text" placeholder="Artiste du Vinyle"/>
                        </div>
                        <div>
                            <label>Date V:</label>
                            <input type="date" placeholder="date du Vinyle"/>
                        </div>
                        <div>
                            <label>Description V:</label>
                            <textarea name="creerTexte" rows="10em"></textarea>
                        </div>
                        <div>
                            <label>Taille V:</label>
                            <input type="number" placeholder="-"/>
                        </div>
                        <div>
                            <label>Possession V:</label>
                            <input type="number" placeholder="0"/>
                        </div>
                    </article>
                    <div>
                        <input type="file" id="avatar" name="avatar" accept="image/jpg, image/JPG, image/jpeg">
                        <input type="submit">
                    </div>
                
            </section>
    </div>
</template>

<script>

export default ({
   name: 'Ajouter'
})
</script>