import { createElementWithAttributes } from './utils.js';

export function renderMenuPage() {
    
    const pizzaMenu = [
        {
            name: 'Neapolitan Pizza',
            imageURL: '/f3gr/src/originals/Neapolitan-pizza.jpeg',
            description: 'Enjoy the authentic flavors of Naples with our Neapolitan Pizza. Made with the finest ingredients, including fresh mozzarella, San Marzano tomatoes, and fragrant basil, this classic pizza is cooked in a wood-fired oven for that perfect charred crust.',
            pricePara: 'From',
            price: '$12.99',
        },
        {
            name: 'Pizza Fritta',
            imageURL: '/f3gr/src/originals/Pizza-Fritta.jpeg',
            description: 'Experience the thin and crispy perfection of our Pizza Tonda Romana. This round Roman-style pizza is known for its delicate crust and generous toppings. Choose from an array of traditional or gourmet toppings, such as mushrooms, Italian sausage, and truffle oil.',
            pricePara: 'From just',
            price: '$10.99',
        },
        {
            name: 'Pizza alla Pala',
            imageURL: '/f3gr/src/originals/Pizza-alla-Pala.jpeg',
            description: `Treat yourself to the unique and delicious Pizza alla Pala. This Roman-style pizza features a rectangular shape with a thick, airy crust. Topped with a variety of flavorful ingredients like prosciutto, arugula, and cherry tomatoes, it's a delight for your taste buds.`,
            pricePara: `From`,
            price: '$13.99',
        },
        {
            name: 'Pizza Tonda Romana',
            imageURL: '/f3gr/src/originals/Pizza-Tonda-Romana.jpeg',
            description: 'Experience the thin and crispy perfection of our Pizza Tonda Romana. This round Roman-style pizza is known for its delicate crust and generous toppings. Choose from an array of traditional or gourmet toppings, such as mushrooms, Italian sausage, and truffle oil',
            pricePara: 'From',
            price: '$13.99',
        }
    ]

    const selectedMain = document.querySelector('main');
    selectedMain.innerHTML = "";

    const selectedButton = document.querySelector('button.menu');
    selectedButton.setAttribute('data-value', 'current');

    for (let i = 0; i < pizzaMenu.length; i++) {
        const menuBlock = createElementWithAttributes('div', {class: 'menu-block'}, selectedMain);

        const name = createElementWithAttributes('p', { class: 'name' }, menuBlock);
        name.textContent = pizzaMenu[i].name;

        createElementWithAttributes('img', { src: pizzaMenu[i].imageURL, alt: `${pizzaMenu[i].name} + image` }, menuBlock);

        const description = createElementWithAttributes('p', { class: 'description' }, menuBlock);
        description.textContent = pizzaMenu[i].description;

        const price = createElementWithAttributes('p', { class: 'price' }, menuBlock);
        price.textContent = pizzaMenu[i].pricePara + " " + pizzaMenu[i].price;
    }
}