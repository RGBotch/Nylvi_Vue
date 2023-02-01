<template>
    <div>
        <section>
            <div id="separe">
                <div id="gauche">
                    <h3>Votre compte</h3>
                    <div>
                        <form ref="formConnexion">
                          <p v-if="error" class="error">{{ error }}</p>
                            <input type="text" placeholder="email" class="id"/>
                            <input type="password" placeholder="mot de passe" class="mdp"/>
                            <button @click="sendFormConnexion" class="bouton">Connexion</button>
                        </form>
                    </div>
                </div>
                <div id="droite">
                    <h3>Inscription</h3>
                    <form ref="formInscription">
                        <p v-if="error" class="error">{{ error }}</p>
                        <input type="text" placeholder="Ville" name="ville" class="ville" pattern="[a-zA-Z]{3,}" id="city" required />
                        <input type="email" placeholder="email" name="email" class="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" id="mail" required />
                        <input type="text" placeholder="Pseudo" name="name" class="id" pattern="[a-zA-Z]{3,}" />
                        <input type="password" placeholder="mot de passe" name="password" class="mdp" />
                      <button @click="sendFormInscription" class="bouton">Inscription</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// import {mapState, mapMutations} from 'vuex'

export default{
  name:'Connexion',
   data() {
     return {
       email: "",
       password: "",
       error: "",
       formInscription: "",
       formConnexion: "",
       ville: "",
       name: "",
     };
   },
   methods: {
     sendFormInscription() {
       let form = new FormData(this.formInscription)
/*     let headers = new Headers()
       headers.append('Authorization')*/
       fetch('http://127.0.0.1:8000/api/register', {
         method: "POST",
         body: form,
       })
           .then((response) => response.json())
           .then((data) => console.log(data))
     },
     sendFormConnexion() {
       let form = new FormData(this.formConnexion)
       /*     let headers = new Headers()
              headers.append('Authorization')*/
       fetch('http://127.0.0.1:8000/api/login', {
         method: "POST",
         body: form,
       })
           .then((response) => response.json())
           .then((data) => console.log(data))
     }
   }
  //   ...mapMutations(['setToken']),
  //   async login() {
  //     // ...
  //     // gérer la réponse de l'API ici
  //     this.setToken(response.data.token)
  //   },
    // async login(event) {
    //   event.preventDefault();
    //
    //   try {
    //     const response = await axios.post("https://your-api.com/login", {
    //       email: this.email,
    //       password: this.password
    //     });
    //
    //     mapState().setItem('token', response.data.token)
    //     this.$router.push('/dashboard')
    //   } catch (error) {
    //     this.error = "Adresse email ou mot de passe incorrect.";
    //   }
    // }
  // }
}
</script>