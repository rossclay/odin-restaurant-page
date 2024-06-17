import AtlantaImage from './img/State-Farm-Arena.jpg'
import NewYorkImage from './img/Madison-Square-Garden.jpg'
import LosAngelesImage from './img/Crypto-Arena.jpg'

function createContactDOM() {
    const content = document.getElementById('content')
    const contentHeader = document.querySelector('.content-header')
    contentHeader.textContent = 'Contact Us'
    const locationsHeader = document.createElement('div')
    locationsHeader.classList.add('sub-header')
    locationsHeader.textContent = 'Locations'
    content.appendChild(locationsHeader)

    for (let i = 0; i < 3; i++) {
        const locationCard = document.createElement('div')
        locationCard.classList.add('card')
        const locationHeader = document.createElement('div')
        locationHeader.classList.add('card-header')
        const locationContent = document.createElement('div')
        switch (i) {
            case 0:
                locationHeader.textContent = 'Atlanta'
                locationCard.appendChild(locationHeader)
                for (let j = 0; j < 4; j++) {
                    const contactUL = document.createElement('ul');
                    switch (j) {
                        case 0:
                            const img = new Image()
                            img.src = AtlantaImage
                            img.classList.add('contact-img')
                            contactUL.appendChild(img)
                            locationContent.appendChild(contactUL)
                            break;
                        case 1:
                            contactUL.textContent = '456 Fraudulent Parkway, Fakeville, GA'
                            locationContent.appendChild(contactUL);
                            break;
                        case 2:
                            contactUL.textContent = '404-111-1111'
                            locationContent.appendChild(contactUL);
                            break;
                        case 3:
                            contactUL.textContent = 'atlantalocation@email.com'
                            locationContent.appendChild(contactUL);
                            break;
                    }
                }
                break;
            case 1:
                locationHeader.textContent = 'New York'
                locationCard.appendChild(locationHeader)
                for (let j = 0; j < 4; j++) {
                    const contactUL = document.createElement('ul');
                    switch (j) {
                        case 0:
                            const img = new Image()
                            img.src = NewYorkImage
                            img.classList.add('contact-img')
                            contactUL.appendChild(img)
                            locationContent.appendChild(contactUL)
                            break;
                        case 1:
                            contactUL.textContent = '456 Madison Ave, New York City, NY'
                            locationContent.appendChild(contactUL);
                            break;
                        case 2:
                            contactUL.textContent = '123-111-1111'
                            locationContent.appendChild(contactUL);
                            break;
                        case 3:
                            contactUL.textContent = 'NYClocation@email.com'
                            locationContent.appendChild(contactUL);
                            break;
                    }
                }
                break;
            case 2:
                locationHeader.textContent = 'Los Angeles'
                locationCard.appendChild(locationHeader)
                for (let j = 0; j < 4; j++) {
                    const contactUL = document.createElement('ul');
                    switch (j) {
                        case 0:
                            const img = new Image()
                            img.src = LosAngelesImage
                            img.classList.add('contact-img')
                            contactUL.appendChild(img)
                            locationContent.appendChild(contactUL)
                            break;
                        case 1:
                            contactUL.textContent = '789 Hollywood Ave, Los Angeles, CA'
                            locationContent.appendChild(contactUL);
                            break;
                        case 2:
                            contactUL.textContent = '456-111-1111'
                            locationContent.appendChild(contactUL);
                            break;
                        case 3:
                            contactUL.textContent = 'LAlocation@email.com'
                            locationContent.appendChild(contactUL);
                            break;
                    }
                }
                break;
        }
        locationCard.appendChild(locationHeader)
        locationCard.appendChild(locationContent)
        content.appendChild(locationCard)
    }

}
export { createContactDOM }