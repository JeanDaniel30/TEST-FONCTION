
let choixLangue;

choixLangue = prompt(`En quelle langue voulez-vous traduire "Bonjour" ? ALL = Allemand, EN = Anglais`);
    traduire(choixLangue.toUpperCase());

function traduire(translate) {
    alert(translate);
    if (translate === "ALL") {
        alert("Hallo");
    } 
    else {
            alert("Hello");
        }
}
