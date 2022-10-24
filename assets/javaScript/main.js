
import servicesModal from "./modules/servicos.js";
import escrevendoTela from "./modules/maqEscrever.js";
import fraseAnima from "./modules/frase.js";
import slideNav from "./modules/slide.js";
import debounce from "./modules/debounce.js"
import formularioModal from "./modules/formModal.js"

fraseAnima();
escrevendoTela();
servicesModal();
debounce();
formularioModal();

const slide = new slideNav('.slide' , '.wrapper');
slide.init();
//slide.addArrow('.prev' , '.next');
slide.addControl('.custom-controls');
