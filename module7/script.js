
/*************************************************
 * EXERCICE 6 - Tableaux simples & foreach
 * Notions : tableaux simples, foreach, index,
 *           réutilisation des fonctions de prix
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Café Ze";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Café pour développeurs passionnés !";

console.log("Bienvenue à" + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
    console.log("La boutique est ouverte.");
} else {
    console.log("La boutique est fermée.");
}

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
    taglineElement.textContent = `Bienvenue à ${shopName} à ${city}`;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Strings & messages --- */

let welcomeMessage =
    "Bienvenue à " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
    cartMessageElementEx2.textContent =
        sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
    return priceHT + priceHT * TVA;
}

function formatPrice(price) {
    return price.toFixed(2) + " €";
}

console.log("Test TTC :", formatPrice(calculatePriceTTC(10)));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

// let featuredProductName = "T-shirt Code & Chill";
// let featuredProductPriceHT = 19.99;
// let featuredProductDescription = "Parfait pour coder confortablement.";
// let featuredProductImage = "images/tshirt-code-chill.jpg";







/* --- Nouveautés Exercice 6 - foreach sur tableaux simples --- */

// 1) Deux tableaux synchronisés
// const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
// const productPricesHT = [19.99, 9.99, 2.5];

// console.log("Nombre de produits :", productNames.length);

// // 2) Fonction d'affichage console
// function displayProductsInConsole() {
//     productNames.forEach((name, index) => {
//         const priceHT = productPricesHT[index];
//         const priceTTC = calculatePriceTTC(priceHT);
//         const formattedPrice = formatPrice(priceTTC);

//         console.log(`${index + 1} - ${name} — ${formattedPrice} TTC`);
//     });
// }

// displayProductsInConsole();

console.log("Exercice 6 chargé ✅");



let products = [
    {
        id: "product-list1",
        title: "café latté",
        priceHTExample: 4,
        description: "C'est la deuxième boisson la plus bue dans le monde après l'eau. Le café fait partie de nos vies, et de notre quotidien",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/500px-Caffe_Latte_at_Pulse_Cafe.jpg"
    },
    {
        id: "product-list2",
        title: "cappuccino",
        priceHTExample: 3.99,
        description: "C'est la deuxième boisson la plus bue dans le monde après l'eau. Le café fait partie de nos vies, et de notre quotidien",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/500px-Caffe_Latte_at_Pulse_Cafe.jpg"
    },
    {
        id: "product-list3",
        title: "regular with milk",
        priceHTExample: 2.50,
        description: "C'est la deuxième boisson la plus bue dans le monde après l'eau. Le café fait partie de nos vies, et de notre quotidien",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/500px-Caffe_Latte_at_Pulse_Cafe.jpg"
    }
]

// Récupère dans le DOM l’élément <section id="product-list">.
const productList = document.getElementById("product-list");

// Assure-toi que ta fonction createProductCard(product) fonctionne correctement avec les objets du tableau.
function createFeaturedProductCard(product) {
    const article = document.createElement("article");
    article.classList.add("product-card");
    const img = document.createElement("img");
    img.src = product.image;
    //   img.alt = featuredProductName;
    const title = document.createElement("h3");
    title.textContent = product.title;
    // product.title indique que je travaille sur un objet
    const desc = document.createElement("p");
    desc.textContent = product.description;

    const priceElt = document.createElement("p");
    priceElt.textContent = formatPrice(calculatePriceTTC(product.priceHTExample));

    // productList.appendChild(article); la correction dans la classe
    article.appendChild(img);
    // ça veut dire que j'ajoute une image dans mon article et entre le paranthese on mets le nom dde variable, pas le nom de balise
    article.appendChild(title);
    article.appendChild(priceElt);
    article.appendChild(desc);

    return article;
}


// Crée une fonction displayProductsInPage() qui :
// vide le conteneur
function displayProductsInPage() {
    productList.innerHTML = "";


    // parcourt le tableau products

    // la correction dans la salle
    // for (const product of products) {
    //     const card = createFeaturedProductCard(product);
    //     productList.appendChild(card);
    // }

    products.forEach(element => {
        // crée une carte produit pour chaque élément
        const card = createFeaturedProductCard(element);
        // note: ici la fonction createFeaturedProductCard(element); remplace mon article!!

        // ajoute chaque carte dans la page
        productList.appendChild(card);
    });
}
// Appelle displayProductsInPage() pour afficher tous les produits.
displayProductsInPage();

// 💡 Par rapport à l’Exercice 6 : ici on regroupe toutes les infos d’un produit au même endroit, ce qui rend le code plus clair et plus facile à maintenir.
