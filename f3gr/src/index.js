import { renderFrame, renderAboutPage } from './pages/about.js';
import { renderMenuPage } from './pages/menu.js';
import { renderContactPage } from './pages/contact.js';
import { checkIfCurrent, removeCurrentStatus } from './pages/utils.js';

renderFrame();
renderAboutPage();

const buttonAbout = document.querySelector('button.about');
const buttonMenu = document.querySelector('button.menu');
const buttonContact = document.querySelector('button.contact');
buttonAbout.addEventListener('click', function() {
    if (!checkIfCurrent(buttonAbout)) {
        removeCurrentStatus(buttonMenu);
        removeCurrentStatus(buttonContact);
        renderAboutPage();
    }
});
buttonMenu.addEventListener('click', function() {
    if (!checkIfCurrent(buttonMenu)) {
        removeCurrentStatus(buttonAbout);
        removeCurrentStatus(buttonContact);
        renderMenuPage();
    }
});
buttonContact.addEventListener('click', function() {
    if (!checkIfCurrent(buttonContact)) {
        removeCurrentStatus(buttonAbout);
        removeCurrentStatus(buttonMenu);
        renderContactPage();
    }
});