import './style.css';
import { createMenuDOM } from './menu';
import { createHomeDOM } from './create';
import { createContactDOM } from './contact';

createHomeDOM()
let currentPage = 'Home'

const navBtns = document.querySelectorAll('.nav-btn')
const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')
const content = document.getElementById('content')

function clearPage() {
    content.innerHTML = '';
    const contentHeader = document.createElement('div')
    contentHeader.classList.add('content-header')
    content.appendChild(contentHeader)
}

function handleClick(e) {
    const targetPageId = e.target.id
    updatePage(targetPageId)
}


function updatePage(page) {
    if (page === currentPage) {
        // do nothing.
    }

    else if (page === 'menu') {
        clearPage()
        createMenuDOM()
        homeBtn.classList.add('hidden')
        contactBtn.classList.add('hidden')
        menuBtn.classList.remove('hidden')
    }

    else if (page === 'contact') {
        clearPage()
        createContactDOM()
        homeBtn.classList.add('hidden')
        contactBtn.classList.remove('hidden')
        menuBtn.classList.add('hidden')
    }

    else if (page === 'home') {
        clearPage()
        createHomeDOM()
        homeBtn.classList.remove('hidden')
        contactBtn.classList.add('hidden')
        menuBtn.classList.add('hidden')
    }

}

navBtns.forEach((navBtn) => navBtn.addEventListener('click', handleClick))
