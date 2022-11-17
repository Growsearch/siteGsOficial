
import servicesModal from "./modules/servicos.js";
import escrevendoTela from "./modules/maqEscrever.js";
import fraseAnima from "./modules/frase.js";
import slideNav from "./modules/slide.js";
import debounce from "./modules/debounce.js"
import animaCard from "./modules/animaCard.js"
import contatenos from"./modules/contateModal.js";

fraseAnima();
escrevendoTela();
servicesModal();
debounce();
animaCard();
contatenos();


const slide = new slideNav('.slide' , '.wrapper');
slide.init();
//slide.addArrow('.prev' , '.next');
slide.addControl('.custom-controls');
