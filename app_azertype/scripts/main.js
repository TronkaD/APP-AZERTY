// Déclarez une variable listeMots qui est un tableau contenant trois
let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listeMotsProposes = listeMots;

// Déclarez une variable listePhrases qui est un tableau contenant trois
let listePhrases = ["Ama va à l'école", "Ali apprend ces leçons", "Maman va au marigot"];

// Methode pour afficher les mots que doit tapez l'utilisateur
function afficherMots(proposition){
    let displayWord = document.querySelector(".display-word");
    return displayWord.innerText = proposition;
};

//
 function afficheEmail(nom, email, score){
    let mailto = ` mailto:${email}?subject:salut ${nom}?body= votre score est ${score}`;
    location.href = mailto;
 };

 //
function validateNom(nom){
    if(nom.length < 2){
        throw new Error("Ce nom est trop court");
    }
    
};

//
function validateEmail(email){
    regEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if(!regEmail.test(email)){
        throw new Error("email est incorrect");
    }
};

//
function afficheScore(score, motsProposer){
    let displayScore = document.querySelector(".display-score");
    return displayScore.innerText = `${score} / ${motsProposer}`;
};

// Afficher le message d'erreur

function afficherMessageErreur(message){

    let spanErreur= document.getElementById("erreur-message");
        let u = "10px";
        if(!spanErreur){
            let popup = document.querySelector(".popup");
            spanErreur = document.createElement("span");
            spanErreur.id = "erreur-message";
            popup.appendChild(spanErreur);
        }
        spanErreur.innerText = message;
}
//
function gestionFormulaire(getScore){
    try{
        let getName = document.getElementById('name');
        let nom = getName.value;
        validateNom(nom);
    
        let getEmail = document.getElementById('email');
        let email = getEmail.value;
        validateEmail(email);

        afficherMessageErreur("");
    
    }catch(erreur){
        //gerer les erreus
        afficherMessageErreur(erreur.message);
    }
   

}
//
function lancerJeu(){
    let score = 0;
    let i = 0;
    let bntValidate = document.getElementById("btn-validate");
    let userInput = document.querySelector(".user-text");
    /* let getUserInput = userInput.value; */
    afficherMots(listeMotsProposes[i]);

    bntValidate.addEventListener("click", () => {
        if(userInput.value === listeMotsProposes[i]){
            score += 1;
        };
        i += 1;
        afficheScore(score,i); 
        userInput.value = "";
        if(listeMotsProposes[i] === undefined){
            alert("le jeu est terminer");
            bntValidate.disanble = true;
        }else{
            afficherMots(listeMotsProposes[i]);
        };
         
    });

    let listeBtbRadio = document.querySelectorAll("#choice");
    for(let index = 0; index < listeBtbRadio.length; index++){
        listeBtbRadio[index].addEventListener("change", (event) => {
            console.log(event.target.value);
            if(event.target.value === "1"){
                listeMotsProposes = listeMots;
            }else{
                listeMotsProposes = listePhrases;
            }
            afficherMots(listeMotsProposes[i]);
        });
    };

    let dataSender = document.querySelector('form');
    dataSender.addEventListener("submit", (event) => {
        event.preventDefault();
        let getScore = ` ${score} / ${i}`; 
        gestionFormulaire(getScore);
        afficheScore(score,i); 
    });
   
}; 

lancerJeu();