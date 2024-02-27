/* 
    Vous organisez une soirée avec des amis. Une bonne soirée, c’est souvent une bonne musique ! Mais pour cela, vous devez vous organiser.
    Déclarez les morceaux de votre playlist
    Commençons par faire un inventaire des CD en votre possession.
    * Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés.
    * Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.
    * Ajoutez les morceaux de vos amis
        Pour plaire à tout le monde, vous décidez de laisser vos amis choisir deux morceaux supplémentaires pour compléter votre collection.
        - Ajoutez deux morceaux au tableau playlist de manière à porter le total à cinq morceaux.
        - Enlevez le dernier morceau de votre playlist  
    Malheureusement, certains ne sont pas d’accord avec le dernier morceau ajouté. Il va falloir faire du tri ! 😱
    * Supprimez le dernier morceau ajouté à votre collection.
*/

// Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés
let playlist = ["j'aime les moche", "A mon ex", "la galère était mon ex"];

//Stockez le nombre de morceaux disponibles dans une variable totalMorceaux
let totalMorceaux = playlist.length;

//Ajoutez deux morceaux au tableau playlist de manière à porter le total à cinq morceaux
playlist.push("meilleure amis", "ma copine");

//Supprimez le dernier morceau ajouté à votre collection
playlist.pop();

console.log(playlist);