export function renderAboutPage() {

    const restaurantName = 'PAH ZAZ';
    const paraOneText = 'Welcome to PAH ZAZ, the ultimate experience of the italian cuisine! We are dedicated to serving mouthwatering pizzas that will delight your taste buds and leave you craving for more.';
    const paraTwoText = `At PAH ZAZ, we believe that pizza is not just a food; it's an art form, and we strive to create culinary masterpieces that will satisfy even the most discerning connoisseurs.`;
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
    buttonContact.textContent = 'About';

    const main = createElementWithAttributes('main', {}, mainContent);
    const paraOne = createElementWithAttributes('p', { class: 'one' }, main);
    paraOne.textContent = paraOneText;
    const paraTwo = createElementWithAttributes('p', { class: 'two' }, main);
    paraTwo.textContent = paraTwoText;

    const footer = createElementWithAttributes('footer', {}, mainContent);
    footer.textContent = footerText;
}

function createElementWithAttributes(tagName, attributes = {}, parentElement) {
    const element = document.createElement(tagName);
  
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  
    if (parentElement) {
      parentElement.appendChild(element);
    }
  
    return element;
  }


/* h1 PAH ZAZ

<nav>
<button class="about">About</button>
<button class="menu">Menu</button>
<button class="contact">Contact</button>
</nav>
<main>
<p>Welcome to PAH ZAZ, the ultimate experience of the italian cuisine! We are dedicated to serving mouthwatering pizzas that will delight your taste buds and leave you craving for more. </p>
<p>At PAH ZAZ, we believe that pizza is not just a food; it's an art form, and we strive to create culinary masterpieces that will satisfy even the most discerning connoisseurs.</p>
</main>
<footer>&#169; PAH ZAZ, 2023</footer> */

