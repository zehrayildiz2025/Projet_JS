// /*************************************************
//  * EXERCICE 3 - Nombres, calculs & TVA
//  * Notions : opérations mathématiques, incrémentation
//  *************************************************/

// /* --- Correction Exercice 1 & 2 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//     taglineElement.textContent =
//         "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//     yearSpan.textContent = new Date().getFullYear();
// }

// let welcomeMessage =
//     "Bienvenue dans " + shopName + " située à " + city + " !";
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

/* --- Nouveautés Exercice 3 --- */

// Prix d'exemple et TVA


// let examplePriceHT = 20;
// const TVA = 0.2;

// let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

// console.log("Prix HT exemple :", examplePriceHT);
// console.log("Prix TTC exemple :", examplePriceTTC);

// // Compteur de ventes
// let salesCount = 0;
// salesCount++;
// salesCount++;

// console.log("Nombre de ventes :", salesCount);


// /* --- Rendu visuel Exo 3 --- */

// const cartTotalHeader = document.getElementById("cart-total");
// const cartTotalAside = document.getElementById("cart-total-aside");

// if (cartTotalHeader) {
//     cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
// }
// if (cartTotalAside) {
//     cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
// }

// const cartMessageElement = document.getElementById("cart-message");
// if (cartMessageElement) {
//     cartMessageElement.textContent =
//         "Exemple de prix TTC affiché dans le panier (exercice 3).";
// }

// console.log("Exercice 3 chargé ✅");

// ex4
// - Définir une fonction (calculatePriceTTC(priceHT)) qui :
function calculatePriceTTC(priceHT) {
    //     • reçoit un prix HT en paramètre
    //     • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
  const TVA = 0.2;
  let priceTTC = priceHT+(priceHT*TVA);
    //     • renvoie le prix TTC
    return  priceTTC;
}
  let firstItemPrice = 26.77;
//   console.log(calculatePriceTTC(firstItemPrice));
  let firstItemPriceTTC = calculatePriceTTC(firstItemPrice);
    // console.log(calculatePriceTTC(20)); without let firstPrice = 20;
    console.log(firstItemPriceTTC);
    
  
// - Définir une autre fonction (formatPrice(price)) qui :
function formatPrice(price) {
    let rounded = price.toFixed(2);
    let formatted = rounded.replace(".", ",") + "€"; 
    // this is the teacher's correction return price.toFixed(2).replace(".", ",") + "€"; 
    return formatted;
}

console.log(formatPrice(firstItemPriceTTC));
console.log(formatPrice(i) + "This is the first price");

// teacher's correction console.log
// console.log("Prix TTC pour 10€ HT:", formatPrice(calculatePriceTTC(10)));
// console.log("Prix TTC pour 19,99 HT:", formatPrice(calculatePriceTTC(19.9999)));


// console.log(formatPrice());

//     • reçoit un prix ( type :nombre)
//     • arrondit ce prix à 2 décimales
//     • ajoute le symbole de la monnaie
//     • renvoie le résultat sous forme de texte
//       (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)

// - Tester ces fonctions :
//     • appeler la fonction de calcul du TTC avec différents prix HT
//     • passer le résultat dans la fonction de formatage
//     • afficher le résultat final dans la console



























































// function calculatePriceTTC(priceHT) {
//     const TVA = 0.2;
//     let priceTTC = priceHT + (priceHT * TVA);
//     return priceTTC;
// }
// let firstPrice = 20;
//  let newPrice = calculatePriceTTC(firstPrice);
// console.log("new price: " + newPrice);


// function formatPrice(i) {
//     let rounded = i.toFixed(2);
//     console.log(rounded);
    
//     return rounded;
// }
// let finalRounded = formatPrice(2.4394343);
// console.log(finalRounded + "$");
// console.log(formatPrice(2.4394343));
