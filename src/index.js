console.log(`i'm doing something!`)
console.log(`and again!`)

const navBtns = document.querySelectorAll('.nav-btn')

let currentPage

function handleClick(e) {
    const targetPage = e.target

    updatePage(targetPage)
}


function updatePage(pageOption) {

}

navBtns.forEach((navBtn) => navBtn.addEventListener('click', handleClick))
