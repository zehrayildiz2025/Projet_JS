
/*************************************************
 * EXERCICE 4 - Fonctions de prix
 * Notions : function, paramètres, return, toFixed
 *************************************************/
/* --- Correction Exercice 1, 2 & 3 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue" + " à " + "Café Ze";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

const TVA = 0.2;
let examplePriceHT = 20;
let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
let salesCount = 2;

/* --- Nouveautés Exercice 4 --- */

// Fonction qui calcule un prix TTC à partir d'un prix HT
function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

// Fonction qui formate un prix en "xx,xx €"
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

// Tests dans la console
console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
console.log(
  "Prix TTC pour 19,99€ HT :",
  formatPrice(calculatePriceTTC(19.99))
);

/* --- Rendu visuel Exo 4 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
}

console.log("Exercice 4 chargé ✅");






// Exercise 5
// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
let featuredProductName = "café latté";
let featuredProductPriceHT = 10;
let featuredProductDescription = "the best coffee ever";
let featuredProductImage = "https://cdn.britannica.com/13/225313-050-3519547A/Lime-butterfly-Papilio-demoleus-feeding-on-flower.jpg?w=300";

function calculatePriceTTC(priceHT) {
  const TVA = 0.2;
  let priceTTC = priceHT + (priceHT * TVA);
  return priceTTC;
}
function formatPrice(price) {
  let rounded = price.toFixed(2);
  let formatted = rounded.replace(".", ",") + "€";
  return formatted;
}
let firstPrice = 20;
let firstCalculation = calculatePriceTTC(firstPrice);
let formattedPrice = formatPrice(firstCalculation);

// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
let productListe = document.getElementById("product-list");

// - Définir une fonction (createFeaturedProductCard()) qui :
function createFeaturedProductCard() {
  //     • crée un conteneur pour la carte  
  //       (indice : il existe une méthode du DOM pour créer un élément HTML)
  let cardContainer = document.createElement("article");
  //     • crée une image :
  //         - lui donner la source de l'image
  //       (indice : pensez aux propriétés des balises <img>)
  let image = document.createElement("img");
  image.src = featuredProductImage;
  image.alt = featuredProductImage;
  //     • crée un titre et lui mettre le nom du produit  
  //       (indice : une propriété permet d’écrire du texte dans un élément)
  let productTitle = document.createElement("h3");
  productTitle.textContent = featuredProductName;
  //     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
  //       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
  //     • formate ce prix TTC avec la fonction prévue pour ça



  //     • crée un paragraphe pour afficher le prix TTC
  let para = document.createElement("p");
  para.textContent = "This is the TTC price :" + " " + firstCalculation + "€";
  //     • crée un autre paragraphe pour la description
  let para2 = document.createElement("p");
  para2.textContent = "Here comes the description";
  //     • assemble tous les éléments dans le conteneur
  //       (indice : pensez à une méthode qui ajoute un enfant dans un élément)

  cardContainer.classList.add("product-card");
  image.classList.add("product-image");
  productTitle.classList.add("product-title");
  para.classList.add("product-price");
  para2.classList.add("product-description");

  productListe.appendChild(cardContainer);
  cardContainer.appendChild(image);
  cardContainer.appendChild(productTitle);
  cardContainer.appendChild(para);
  cardContainer.appendChild(para2);
  //     • retourne ce conteneur
  return productListe;
  // return cardContainer; c'est la correction dans la classe
}
// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
productListe.innerHTML = "";
// - Appeler la fonction pour créer la carte

createFeaturedProductCard();
// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)

// console.log(Exercise 5 chargé);


