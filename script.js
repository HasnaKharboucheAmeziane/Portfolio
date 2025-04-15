const popover = document.getElementById("monpopover");
const toggleBtn = document.getElementById("toggleBtn");

const toggleBtn2 = document.getElementById("toggleBtn2");
const popover2 = document.getElementById("monpopover2");

// Vérifie la prise en charge de l'API Popover.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover automatique
  popover.popover = "auto";
  // Définit le bouton comme étant le contrôle du popover
  toggleBtn.popoverTargetElement = popover;

  // Définit que le bouton peut afficher/masquer le popover
  toggleBtn.popoverTargetAction = "toggle";

  popover2.popover = "auto";
  toggleBtn2.popoverTargetElement = popover2;
  toggleBtn2.popoverTargetAction = "toggle";

} else {
  popover.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn.hidden = true;

  popover2.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn2.hidden = true;
}

