const popover1 = document.getElementById("monpopover1");
const toggleBtn1 = document.getElementById("toggleBtn1");

const toggleBtn2 = document.getElementById("toggleBtn2");
const popover2 = document.getElementById("monpopover2");

const toggleBtn3 = document.getElementById("toggleBtn3");
const popover3 = document.getElementById("monpopover3");

const toggleBtn4 = document.getElementById("toggleBtn4");
const popover4 = document.getElementById("monpopover4");

const toggleBtn5 = document.getElementById("toggleBtn5");
const popover5 = document.getElementById("monpopover5");

const toggleBtn6 = document.getElementById("toggleBtn6");
const popover6 = document.getElementById("monpopover6");

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

  popover5.popover = "auto";
  toggleBtn5.popoverTargetElement = popover5;
  toggleBtn5.popoverTargetAction = "toggle";

  popover6.popover = "auto";
  toggleBtn6.popoverTargetElement = popover6;
  toggleBtn6.popoverTargetAction = "toggle";
} else {
  popover1.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn1.hidden = true;

  popover2.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn2.hidden = true;

  popover3.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn3.hidden = true;

  popover4.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn4.hidden = true;

  popover5.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn5.hidden = true;

  popover6.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn6.hidden = true;
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

// -------------------------ChatBot------------------------------

const chatbox = document.getElementById("chatbox");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  try {
    const response = await fetch(
      "https://hasnakharbouche.app.n8n.cloud/webhook/3d30434e-4798-4893-985f-0e809f756769",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message }),
      }
    );

    const data = await response.text();
    addMessage(data, "bot");
  } catch (error) {
    addMessage("Erreur de connexion au serveur.", "bot");
  }
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

// {   "reply": "={{$json.choices[0].message.content}}" }

// --------------------------------cxhatbot MES DONNEES---------------

// const chatbox = document.getElementById("chatbox");
// const sendBtn = document.getElementById("sendBtn");
// const userInput = document.getElementById("userInput");

// function addMessage(text, sender) {
//   const msg = document.createElement("div");
//   msg.classList.add("message", sender);
//   msg.textContent = text;
//   chatbox.appendChild(msg);
//   chatbox.scrollTop = chatbox.scrollHeight;
// }

// async function sendMessage() {
//   // Ton texte directement ici :
//   const message = "bonjour, coucou, salut";

//   addMessage(message, "user");

//   try {
//     const response = await fetch("https://hasnakharbouche.app.n8n.cloud/webhook/chatbot", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message })
//     });

//     const data = await response.json();
//     addMessage(data.reply, "bot");

//   } catch (error) {
//     addMessage("Erreur de connexion au serveur.", "bot");
//   }
// }

// // Envoi automatique du message dès que tu cliques
// sendBtn.addEventListener("click", sendMessage);

// // Ou avec la touche Entrée
// userInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") sendMessage();
// });
