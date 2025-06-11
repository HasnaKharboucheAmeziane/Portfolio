const popover1 = document.getElementById("monpopover1");
const toggleBtn1 = document.getElementById("toggleBtn1");

const toggleBtn2 = document.getElementById("toggleBtn2");
const popover2 = document.getElementById("monpopover2");

const toggleBtn3 = document.getElementById("toggleBtn3");
const popover3 = document.getElementById("monpopover3");

const toggleBtn4 = document.getElementById("toggleBtn4");
const popover4 = document.getElementById("monpopover4");



// Vérifie la prise en charge de Popover.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover automatique
  popover1.popover = "auto";
  // Définit le bouton comme étant le contrôle du popover
  toggleBtn1.popoverTargetElement = popover1;

  // Définit que le bouton peut afficher/masquer le popover
  toggleBtn1.popoverTargetAction = "toggle";

  popover2.popover = "auto";
  toggleBtn2.popoverTargetElement = popover2;
  toggleBtn2.popoverTargetAction = "toggle";

  popover3.popover = "auto";
  toggleBtn3.popoverTargetElement = popover3;
  toggleBtn3.popoverTargetAction = "toggle";

  popover4.popover = "auto";
  toggleBtn4.popoverTargetElement = popover4;
  toggleBtn4.popoverTargetAction = "toggle";


} else {
  popover1.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn1.hidden = true;

  popover2.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn2.hidden = true;

  popover3.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn3.hidden = true;

  popover4.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn4.hidden = true;
}

// ------------------------------------MENU BURGER-----------------------------------------

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

// Toggle (afficher et retirer) du menu au clic sur le burger
burger.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la fermeture immédiate
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

// Fermer le menu si on clique ailleurs
document.addEventListener("click", (e) => {
  // Si on clique en dehors du menu et du burger
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove("active");
    burger.classList.remove("active");
  }
});


// ------------------------formulaire reçu---------------------

 
