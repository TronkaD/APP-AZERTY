// Déclarez une variable listeMots qui est un tableau contenant trois
/* let listeMots = ["Cachalot", "Pétunia", "Serviette"];
// Déclarez une variable listePhrases qui est un tableau contenant trois
let listePhrases = ["Ama va à l'école", "Ali apprend ces leçons", "Maman va au marigot"];
//
let scoreTotal = 0;
// Déclarez une deuxième variable score, initialisée à 0
let score = 0; */



/* // Déclarez une variable listeMots qui est un tableau contenant trois
let listeMots = ["Cachalot", "Pétunia", "Serviette"];
// Déclarez une variable listePhrases qui est un tableau contenant trois
let listePhrases = ["Ama va à l'école", "Ali apprend ces leçons", "Maman va au marigot"];


 function displayProposition(proposition){
    let displayWord = document.querySelector(".display-word");
        displayWord.innerText = proposition;
 }
 function displayResultat(score, nbMotsProposes){
    let displayResultat = document.querySelector(".display-score");
    displayResultat.innerText= `${score} / ${nbMotsProposes}`;
 }
//
function lancerJeu(){
    let score = 0;
    let i = 0;
    let userInput = document.getElementsByClassName("user-text");
    let getInputUser = userInput.value;
    let buttonValidate = document.getElementById("btn-validate");

    displayProposition(listeMots[i]);
    buttonValidate.addEventListener('click', () => {
        console.log(getInputUser);
        if(getInputUser === listeMots[i]){
            score += 1;
        };
        i += 1;
        getInputUser = "";
        displayResultat(score,i);
        if(listeMots[i] === undefined){
            alert("le jeu est fini");
            buttonValidate.disable = true;
        }else{
            displayProposition(listeMots[i]);
        };

        displayResultat(score,i);
    });
};
lancerJeu();
 */


/* // Déclarez une variable listeMots qui est un tableau contenant trois
let listeMots = ["Cachalot", "Pétunia", "Serviette"];

// Déclarez une variable listePhrases qui est un tableau contenant trois
let listePhrases = ["Ama va à l'école", "Ali apprend ces leçons", "Maman va au marigot"];

// Methode pour afficher les mots que doit tapez l'utilisateur
function afficherMots(proposition){
    let displayWord = document.querySelector(".display-word");
    return displayWord.innerText = proposition;
};

function afficheScore(score, motsProposer){
    let displayScore = document.querySelector(".display-score");
    return displayScore.innerText = `${score} / ${motsProposer}`;
}; */

/* function lancerJeu() {
    let score = 0;
    let i = 0;
    /* let listeProposition = listeMots; */
    /* let bntValidate = document.getElementById("btn-validate");
    let userInput = document.querySelector(".user-text"); */ 
   
    /* let getUserInput = userInput.value; */
    /* afficherMots(listeMots[i]);

    bntValidate.addEventListener("click", () => {
        if(userInput.value === listeMots[i]){
            score += 1;
        };
        i += 1;
        afficheScore(score,i); 
        userInput.value = "";
        if(listeMots[i] === undefined){
            alert("le jeu est terminer");
            bntValidate.disable = true;
        }else{
            afficherMots(listeMots[i]);
        };
         
    });

    afficherMots(listeMots[i]);  
    afficheScore(score,i);  */
/* }; */
    
   /*  let listeBtnRadio = document.querySelectorAll(".radio-type div input");
    for(let j = 0; j < listeBtnRadio.length; j++){
        listeBtnRadio[j].addEventListener("change", (event) => {
            console.log(event.target.value);
            if(event.target.value === "1"){
                listeProposition = listeMots;
            }else{
                listeProposition = listePhrases;
            }
            afficherMots(listeProposition[i]);     
        });
    }; */
   

