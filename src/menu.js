function createMenuDOM() {
    const content = document.getElementById('content')
    const contentHeader = document.querySelector('.content-header')
    contentHeader.textContent = 'Menu'


    for (let i = 0; i < 8; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header')
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-header')

        switch (i) {
            case 0: {
                const subHeader = document.createElement('div')
                subHeader.classList.add('sub-header')
                subHeader.textContent = 'Beverages'
                cardHeader.textContent = 'Classic Coke'
                cardContent.textContent = 'Carbonated soft drink with a cola flavor manufactured by the Coca-Cola Company.'
                content.appendChild(subHeader)
                break;
            }
            case 1:
                cardHeader.textContent = 'Diet Coke'
                cardContent.textContent = 'Sugar-free and low-calorie soft drink produced and distributed by the Coca-Cola Company. It contains artificial sweeteners instead of sugar.'
                break
            case 2: {
                const subHeader = document.createElement('div')
                subHeader.classList.add('sub-header')
                subHeader.textContent = 'Appetizers'
                cardHeader.textContent = 'Egg Rolls'
                cardContent.textContent = 'A cylindrical, savory roll with shredded cabbage, chopped meat, or other fillings inside a thickly-wrapped wheat flour skin, which is fried in hot oil.'
                content.appendChild(subHeader)
                break;
            }
            case 3:
                cardHeader.textContent = 'Fried Pickles'
                cardContent.textContent = 'Breaded pickle chips with homemade ranch dressing.'
                break;

            case 4: {
                const subHeader = document.createElement('div')
                subHeader.classList.add('sub-header')
                subHeader.textContent = 'Entrees'
                cardHeader.textContent = 'Chicken Wings'
                cardContent.textContent = 'Deep-fried, coated in a a vinegar-based cayenne pepper hot sauce along with celery sticks and carrot sticks, and a dip of ranch dressing.'
                content.appendChild(subHeader)
                break;
            }
            case 5:
                cardHeader.textContent = 'Pepperoni Pizza'
                cardContent.textContent = 'A classic combination of tomato sauce, cheese, and pepperoni that has been around for decades.'
                break;
            case 6: {
                const subHeader = document.createElement('div')
                subHeader.classList.add('sub-header')
                subHeader.textContent = 'Desserts'
                cardHeader.textContent = 'Bread Pudding'
                cardContent.textContent = 'Served warm alongside a scoop of vanilla ice cream.'
                content.appendChild(subHeader)
                break;
            }
            case 7:
                cardHeader.textContent = 'Cannoli'
                cardContent.textContent = 'Fried pastry dough, filled with a sweet, creamy filling containing ricotta cheese.'
                break;

        }

        card.appendChild(cardHeader)
        card.appendChild(cardContent)
        content.appendChild(card)

    }
}
export { createMenuDOM }