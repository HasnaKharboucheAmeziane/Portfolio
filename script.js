const popover1 = document.getElementById("monpopover1");
const toggleBtn1 = document.getElementById("toggleBtn1");

const toggleBtn2 = document.getElementById("toggleBtn2");
const popover2 = document.getElementById("monpopover2");

const toggleBtn3 = document.getElementById("toggleBtn3");
const popover3 = document.getElementById("monpopover3");



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


} else {
  popover1.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn1.hidden = true;

  popover2.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn2.hidden = true;

  popover3.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn3.hidden = true;
}

// ------------------------------------MENU BURGER-----------------------------------------

  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
// pour activer le menu burger et le rendre visible


// ------------------------formulaire reçu---------------------

 
