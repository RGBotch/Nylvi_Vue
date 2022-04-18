<template>
    <div>
        <section>
            <div id="separe">
                <div id="gauche">
                    <h3>Votre compte</h3>
                    <div>
                        <input type="text" placeholder="Pseudo / Adresse mail" class="id"/>
                        <input type="password" placeholder="mot de passe" class="mdp"/>
                        <router-link class="bouton" to="console" >Connexion</router-link>
                    </div>
                </div>
                <div id="droite">
                    <h3>Inscription</h3>
                    <div>
                        <input type="text" placeholder="Ville" name="city" pattern="[a-zA-Z]{3,}" id="city" required/>
                        <input type="email" placeholder="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" id="mail" required>
                        <input type="text" placeholder="Pseudo / Adresse mail" class="id"/>
                        <input type="password" placeholder="mot de passe" class="mdp"/>
                        <router-link class="bouton" to="home">Inscription</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default{
  name:'Connexion',
}
</script>