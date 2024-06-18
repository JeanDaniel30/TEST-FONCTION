

const panierGarnis = ["Banane ","Cerise ","Fraise ","Pomme "];
const couleurFruit = ["Jaune","Rouge","Rouge","Verte"]
const numTab = 0;
let nbrelement = panierGarnis.length;
const type = "p";
let numType;
numType = 1;


for (let i=0; i < nbrelement; i++) {
    document.getElementById(type+numType).innerHTML = panierGarnis[i] + couleurFruit[i];
    numType ++;
}

// alert(panierGarnis.length);
// alert(panierGarnis[0]);


// for (let i=0; i < panierGarnis.length; i++) {
//     alert(panierGarnis[i]);
// }
