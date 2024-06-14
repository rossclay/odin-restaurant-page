function createHomeDOM() {
    // update header
    const content = document.getElementById('content')
    const contentHeader = document.querySelector('.content-header')
    contentHeader.textContent = 'Name of Restaurant'

    // testimonial section
    const testimonial = document.createElement('div')
    testimonial.classList.add('card')
    const testimonialHeader = document.createElement('div')
    testimonialHeader.textContent = `Testimonial`
    testimonialHeader.classList.add('card-header')
    const testimonialContent = document.createElement('div')
    testimonialContent.textContent = `"Wow, here I am, testifying to how good this place is. I would come here again! And I'd recommend it to
                others! Which is what I'm doing here. So, here it is. My Testimonial."`
    testimonialContent.classList.add('card-content')
    const testimonialFooter = document.createElement('div')
    testimonialFooter.textContent = `-The Testifier`
    testimonialFooter.classList.add('card-footer')
    testimonial.appendChild(testimonialHeader)
    testimonial.appendChild(testimonialContent)
    testimonial.appendChild(testimonialFooter)
    content.appendChild(testimonial)

    // Hours section
    const storeHours = document.createElement('div')
    storeHours.classList.add('card')
    const StoreHoursHeader = document.createElement('div')
    StoreHoursHeader.textContent = 'Hours'
    StoreHoursHeader.classList.add('card-header')
    storeHours.appendChild(StoreHoursHeader)
    const storeHoursContent = document.createElement('div')
    storeHoursContent.classList.add('card-content')
    content.appendChild(storeHours)
    // create the hours section with a loop to avoid repetition
    for (let i = 0; i < 7; i++) {
        const hoursUL = document.createElement('ul');
        switch (i) {
            case 0:
                hoursUL.textContent = 'Sunday: 8am - 8pm'
                storeHoursContent.appendChild(hoursUL);
                break;
            case 1:
                hoursUL.textContent = 'Monday: 6am - 6pm'
                storeHoursContent.appendChild(hoursUL);
                break;
            case 2:
                hoursUL.textContent = 'Tuesday: 6am - 6pm'
                storeHoursContent.appendChild(hoursUL);
                break;
            case 3:
                hoursUL.textContent = 'Wednesday: 6am - 6pm'
                storeHoursContent.appendChild(hoursUL);
                break;
            case 4:
                hoursUL.textContent = 'Thursday: 6am - 10pm'
                storeHoursContent.appendChild(hoursUL);
                break;
            case 5:
                hoursUL.textContent = 'Friday: 6am - 10pm'
                storeHoursContent.appendChild(hoursUL);
                break;
            case 6:
                hoursUL.textContent = 'Saturday: 8am - 10pm'
                storeHoursContent.appendChild(hoursUL);
                break;
        }
    }
    storeHours.appendChild(storeHoursContent)
    content.appendChild(storeHours)

    // Location Section
    const location = document.createElement('div')
    location.classList.add('card')
    const locationHeader = document.createElement('div')
    locationHeader.textContent = 'Location'
    locationHeader.classList.add('card-header')
    location.appendChild(locationHeader)
    const locationContent = document.createElement('div')
    locationContent.textContent = '456 Fraudulent Parkway, Fakeville, Georgia'
    locationContent.classList.add('card-content')
    location.appendChild(locationContent)
    content.appendChild(location)

}

export { createHomeDOM }