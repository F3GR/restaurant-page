import { createElementWithAttributes } from './utils.js';


export function renderContactPage() {

    const contactText = {
        phone: `+1 123-456-7890`,
        email: `info@pahzazrestaurant.com`,
        location: `123 Main Street, City, State, Zip Code`,
    }

    const hoursText = {
        working:`Monday to Friday: 11:00 AM - 10:00 PM`,
        weekend: `Saturday and Sunday: 12:00 PM - 11:00 PM`
    }

    const selectedMain = document.querySelector('main');
    selectedMain.innerHTML = "";

    const contactInfo = createElementWithAttributes('div', {class: `contact-info`}, selectedMain);

    const listContacts = createElementWithAttributes('ul', {}, contactInfo);
    listContacts.textContent = 'Contact Us:';

    for (let contact in contactText) {
        const newListElement = createElementWithAttributes('li', {class: `${contact}` }, listContacts);
        newListElement.textContent = contactText[contact];
    }

    const listHours = createElementWithAttributes('ul', {}, contactInfo);
    listHours.textContent = 'Opening hours:';

    for (let contact in hoursText) {
        const newListElement = createElementWithAttributes('li', {class: `${contact}` }, listHours);
        newListElement.textContent = hoursText[contact];
    }
}