import { createElementWithAttributes } from './utils.js';
import Photo from '../originals/pah-zaz.jpeg';

export function renderFrame() {
    const restaurantName = 'PAH ZAZ';
    const footerText = `&#169; PAH ZAZ, 2023`;

    const mainContent = document.querySelector('#content');

    const header = createElementWithAttributes('header', {}, mainContent);
    const heading = createElementWithAttributes('h1', {}, header);
    heading.textContent = restaurantName;

    const nav = createElementWithAttributes('nav', {}, mainContent);
    const buttonAbout = createElementWithAttributes('button', { class: 'about' }, nav);
    buttonAbout.textContent = 'About';
    const buttonMenu = createElementWithAttributes('button', { class: 'menu' }, nav);
    buttonMenu.textContent = 'Menu';
    const buttonContact = createElementWithAttributes('button', { class: 'contact' }, nav);
    buttonContact.textContent = 'Contact';

    const main = createElementWithAttributes('main', {}, mainContent);
    const footer = createElementWithAttributes('footer', {}, mainContent);
    footer.textContent = footerText;
}


export function renderAboutPage() {
    const paraOneText = 'Welcome to PAH ZAZ, the ultimate experience of the italian cuisine! We are dedicated to serving mouthwatering pizzas that will delight your taste buds and leave you craving for more.';
    const paraTwoText = `At PAH ZAZ, we believe that pizza is not just a food; it's an art form, and we strive to create culinary masterpieces that will satisfy even the most discerning connoisseurs.`;

    const selectedMain = document.querySelector('main');
    selectedMain.innerHTML = "";
    
    const selectedButton = document.querySelector('button.about');
    selectedButton.setAttribute('data-value', 'current');

    const paraOne = createElementWithAttributes('p', { class: 'one' }, selectedMain);
    paraOne.textContent = paraOneText;
    const paraTwo = createElementWithAttributes('p', { class: 'two' }, selectedMain);
    paraTwo.textContent = paraTwoText;

    createElementWithAttributes('img', { src: Photo, alt: `restaurant-photo` }, selectedMain);
}