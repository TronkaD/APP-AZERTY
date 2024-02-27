
/*
    PROBLEME

    Vous gérez une bibliothèque qui contient 500 livres. Vous décidez de faire les opérations suivantes :
    - acheter 50 livres de plus ; 
    - en jeter 10 ;
    - racheter 5 des livres jetés.
    1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres. 
    2. Vérifiez le résultat grâce à l’instruction console.log.
    3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé. 
*/
// RESOLUTION

//Créeons une variable totalLivres initialisée à 500
 let totalLivres = 500;

 //acheter 50 livres de plus
 totalLivres += 50;

 //en jeter 10
 totalLivres -= 10;

 //racheter 5 des livres jetés
 totalLivres += 5;

 //Vérifions le résultat grâce à l’instruction console.log
console.log(totalLivres);
 //Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé
 let affichageTotalLivres = totalLivres;
 console.log(" Voici le total restent des livres : "+affichageTotalLivres);
 


