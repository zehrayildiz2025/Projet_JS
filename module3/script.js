// - Créer une variable pour le nom de la boutique
let shopName = "Café Ze";
// - Créer une variable pour la ville
let cityName = "Lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
let isOpen = true;
// - Créer une variable pour le nombre de produits
let productCount = 7;
// - Créer une variable pour le slogan
let slogan = "Une tasse de café pour chauffer vos coeurs"
// - Afficher le slogan dans la console
console.log(slogan);
// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)
let message = "C'est ouvert";
console.log(message);
// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)

if (isOpen = true) {
    console.log("ouvert");
}
else {
    console.log("fermée");
}


// nouveautés ex2
// - Partir du slogan déjà créé à l’exercice 1


// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let welcomeMessage = "Welcome to ";


// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let welcome = (`${welcomeMessage} ${shopName}`);


// - Calculer la longueur du slogan
let longueur = (slogan.length);

// - Créer une version en majuscules du slogan
console.log(slogan.toUpperCase());

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let modifiedSlogan = slogan.replace("café", "thé");

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
console.log(welcomeMessage+" "+shopName);
console.log(welcome);

console.log(slogan);
console.log(longueur);
console.log(slogan.toUpperCase());

console.log(modifiedSlogan);
console.log(modifiedSlogan.length);
console.log(modifiedSlogan.toUpperCase());


// box "slogan", content: "Une tasse de café pour chauffer vos coeurs"

// slogan.replace("café", "thé")

// Expected
// box "slogan", content: "Une tasse de thé pour chauffer vos coeurs"

// Reality
// box "slogan", content: "Une tasse de café pour chauffer vos coeurs"
// "box" "", content : "Une tasse de thé pour chauffer vos coeurs"

// let modifiedSlogan = slogan.replace("café", "thé")
// box "modifiedSlogan", content : "Une tasse de thé pour chauffer vos coeurs"

/*************************************************
 * EXERCICE 2 - Messages & chaînes de caractères
 * Notions : concaténation, template string,
 *           length, toUpperCase, replace
 *************************************************/

/* --- Correction Exercice 1 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// console.log("Bienvenue dans " + shopName + " située à " + city);
// console.log("Slogan :", slogan);

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//   taglineElement.textContent =
//     "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//   yearSpan.textContent = new Date().getFullYear();
// }

// /* --- Corrections Exercice 2 --- */

// // 1) messageBienvenue avec concaténation
// let welcomeMessage =
//   "Bienvenue dans " + shopName + " située à " + city + " !";

// // 2) messageBienvenue2 avec template string
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

// // 3) Longueur du slogan
// let sloganLength = slogan.length;

// // 4) Slogan en majuscules
// let sloganUppercase = slogan.toUpperCase();

// // 5) Modifier le slogan avec replace
// let sloganModified = slogan.replace("goodies", "trésors");

// // 6) Affichages console
// console.log("welcomeMessage :", welcomeMessage);
// console.log("welcomeMessage2 :", welcomeMessage2);
// console.log("Longueur du slogan :", sloganLength);
// console.log("Slogan en majuscules :", sloganUppercase);
// console.log("Slogan modifié :", sloganModified);

// /* --- Rendu visuel Exo 2 --- */

// const cartMessageElement = document.getElementById("cart-message");
// // if (cartMessageElement) {
//   cartMessageElement.textContent =
//     sloganModified +
//     ` (${sloganLength} caractères dans le slogan original)`;
// // }

// console.log("Exercice 2 chargé ✅");

// -------------------------------
// ex03
// - Créer une variable contenant un prix HT d’exemple
let priceHT = 20;
// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const TVA = 0.2;
// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let priceTTC = priceHT+(priceHT*TVA);
// - Afficher le prix HT et le prix TTC dans la console
console.log("Prix HT exemple :", priceHT);
console.log("Prix TTC exemple :", priceTTC);

// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let salesCount = 0;

// - Simuler une nouvelle vente en augmentant ce compteur
salesCount ++;

//   (indice : utiliser l’opérateur pour ajouter 1)

// - Afficher la nouvelle valeur du compteur dans la console
console.log(salesCount);
console.log("Nombre de ventes", salesCount);
