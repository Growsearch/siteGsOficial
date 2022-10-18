
import servicesModal from "./modules/servicos.js";
import escrevendoTela from "./modules/maqEscrever.js";
import fraseAnima from "./modules/frase.js";
import slideNav from "./modules/slide.js";
import debounce from "./modules/debounce.js"

fraseAnima();
escrevendoTela();
servicesModal();
debounce();

const slide = new slideNav('.slide' , '.wrapper');
slide.init();
//slide.addArrow('.prev' , '.next');
slide.addControl('.custom-controls');
