/*
    Vous êtes chargé de la maintenance d’une borne automatique qui permet de récupérer son billet de cinéma. 
    Vous devez préparer la sortie du prochain film Batman, et faire en sorte que les utilisateurs puissent récupérer 
    un billet pour ce nouveau film.
    Déclarez le nouveau ticket de cinéma
    Un ticket de cinéma a plusieurs propriétés : un nom de film, un prix, un numéro de salle.
    * Déclarez un objet ticket avec les propriétés suivantes :nomFilm ; prix ; numeroSalle.
    * Déclarez une variable nom avec votre nom. 
    * Affichez les informations sur la borne
        - Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.
    * Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur.
    * Vérifiez le résultat avec un console.log. 
 */

//Déclarez un objet ticket avec les propriétés suivantes :nomFilm ; prix ; numeroSalle
let ticket = {
    nomFilm : "Super Man",
    prix : "5000",
    numeroSalle : "05"
};
 //Déclarez une variable nom avec votre nom
 let nom = "TronkaD";
 //Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.
 console.log("Bonjour "+nom+ " votre film "+ticket.nomFilm+" est en salle "+ticket.numeroSalle);

 //Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur
 let texteAffichage = `Bonjour ${nom} votre film ${ticket.nomFilm} est en salle ${ticket.numeroSalle}`;
 console.log(texteAffichage);