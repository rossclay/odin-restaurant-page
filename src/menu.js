function createMenuDOM() {
    const content = document.getElementById('content')
    const contentHeader = document.querySelector('.content-header')
    contentHeader.textContent = 'Menu'


    for (let i = 0; i < 3; i++) {
        const subHeader = document.createElement('div')
        subHeader.classList.add('sub-header')
        content.appendChild(subHeader)
        const card = document.createElement('div')
        card.classList.add('card')
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header')
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-header')

        switch (i) {
            case 0:
                subHeader.textContent = 'Beverages'
                cardHeader.textContent = 'Classic Coke'
                cardContent.textContent = 'Carbonated soft drink with a cola flavor manufactured by the Coca-Cola Company.'
                card.appendChild(cardHeader)
                card.appendChild(cardContent)
                break;
            case 1:
                cardHeader.textContent = 'Diet Coke'
                cardContent.textContent = 'Carbonated soft drink with a cola flavor manufactured by the Coca-Cola Company.'
                card.appendChild(cardHeader)
                card.appendChild(cardContent)
                break;
            case 2:
                cardHeader.textContent = 'Diet Coke'
                cardContent.textContent = 'Carbonated soft drink with a cola flavor manufactured by the Coca-Cola Company.'
                break;
        }



        // const dietCokeCard = document.createElement('div')
        // dietCokeCard.classList.add('card')
        // const dietCokeHeader = document.createElement('div')
        // dietCokeHeader.classList.add('card-header')
        // dietCokeHeader.textContent = 'Diet Coke'
        // dietCokeCard.appendChild(dietCokeHeader)
        // const dietCokeContent = document.createElement('div')
        // dietCokeContent.classList.add('card-content')
        // dietCokeContent.textContent = 'Sugar-free and low-calorie soft drink produced and distributed by the Coca-Cola Company. It contains artificial sweeteners instead of sugar.'
        // dietCokeCard.appendChild(dietCokeContent)
        // content.appendChild(dietCokeCard)

        // // appetizer section
        // const appetizerHeader = document.createElement('div')
        // appetizerHeader.classList.add('sub-header')
        // appetizerHeader.textContent = 'Appetizers'
        // content.appendChild(appetizerHeader)

        // const eggRollCard = document.createElement('div')
        // eggRollCard.classList.add('card')
        // const eggRollHeader = document.createElement('div')
        // eggRollHeader.classList.add('card-header')
        // eggRollHeader.textContent = 'Egg Roll'
        // eggRollCard.appendChild(eggRollHeader)
        // const eggRollContent = document.createElement('div')
        // eggRollContent.classList.add('card-content')
        // eggRollContent.textContent = 'A cylindrical, savory roll with shredded cabbage, chopped meat, or other fillings inside a thickly-wrapped wheat flour skin, which is fried in hot oil.'
        // cokeCard.appendChild(cokeContent)
        // content.appendChild(cokeCard)
    }
}
export { createMenuDOM }