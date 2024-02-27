
/**************************************************************************************
 *                                                                                    *
 * Les fonctions nécéssaire au bon fonctionnnement de l'application                   *
 *                                                                                    *
 * ************************************************************************************/
/* Fonction permettant de demander à l'utilisateur si il va jouer avec les mots ou les phrases
 * @return {string} choice
*/
/* function choisirPhrasesOuMots(choice){
    while(choice !== "Mots" && choice !== "Phrases"){
        choice = prompt("Choissez entre les deux options suivante : Mots ou Phrases");
        return choice;
    };
}; */
// la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots.
/* function lancerBoucleDeJeu(listeProposees){
    for(let i = 0; i < listeProposees.length; i++){
        scoreTotal += 1;
        let word = prompt('Entrez le mot: ' +listeProposees[i]);
        if(word === listeProposees[i]){
            score +=1;
        };
        
    };
} */
/* Fonction qui permet d'afficher le score finale à la fin du programme
 * @param{integer} score : score de utilisateur après le jeu
 * param{integer} propositionTotal : la proposition total proposer par le jeu
*/
/* function afficheResultat(score, scoreTotal){
    let displaySocre = document.querySelector(".display-score");
    let displayResulte = `${score} / ${scoreTotal}`;
    displaySocre.innerText = displayResulte;
}; */

/* function lancerJeu(){
    // Entrer Du choix de l'utilisateur grâce à la fonction prompt
    let choice = prompt("Choissez entre les deux options suivante : Mots ou Phrases");

    choisirPhrasesOuMots(choice);
    if(choice === "Mots"){
        lancerBoucleDeJeu(listeMots);
    }else{
        lancerBoucleDeJeu(listePhrases);
    }; 
    afficheResultat(score,scoreTotal);
} */


