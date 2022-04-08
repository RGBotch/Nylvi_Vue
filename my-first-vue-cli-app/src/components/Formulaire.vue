<template>
    <section class="formulaire">
            <h3>Information de livraison</h3>
            <form id="champs" action="" method="get" class="form-commande">
                <input type="text" placeholder="Nom" name="name" pattern="[a-zA-Z]{3,}" id="name" required/>
                <input type="text" placeholder="Adresse" name="street" pattern="\w+(\s\w+){2,}" id="street" required/>
                <input type="text" placeholder="Code postal" pattern="(2[a-bA-B][0-9]{3})|([0-9]{5})" id="zipcode" required/>
                <input type="text" placeholder="Ville" name="city" pattern="[a-zA-Z]{3,}" id="city" required/>
                <input type="tel" placeholder="Telephone" name="phone" pattern="((\+)33|0)[1-9](\d{2}){4}" id="phone" required/>
                <input type="email" placeholder="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" id="mail" required>
                <div class="border">
                    <button id="submitButtonForm" class ="bouton">Commander</button>
                </div>
            </form>
    </section>
</template>

<script>

// export default formulaireScript({

//         choixIdentifiant(){
//           var telephone = document.getElementById("phone");
//           var email = document.getElementById("mail");
//           if( telephone=true){
//             document.getElementById("phone").required = false;
//           }
//           else if (email=true) {
//             document.getElementById("mail").required = false;
//           }
//         },
//         validationForm(){
//           valid = document.getElementsByClassName("valid");
//           invalid = document.getElementsByClassName("invalid");
//           if(valid.lenght = 5){
//           }
//           if(invalid.lenght >=1){
//             document.getElementById("champs").preventDefault(); 
//           }
//         }
// })
</script>

