/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.getElementsByTagName('section');
const navBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
*/

// build the nav
function menu() {

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {
        const menuList = document.createElement('li');
        const listAnchor = document.createElement('a');
        listAnchor.innerText = 'section' + (i + 1);
        listAnchor.setAttribute('class', 'menu__link');

        // Scroll to section on link click
        listAnchor.addEventListener("click", () => {
            sections[i].scrollIntoView({behavior: "smooth"});
            }
        );
        
        menuList.appendChild(listAnchor);
        fragment.appendChild(menuList);

    }
    navBar.appendChild(fragment);

}
menu();

// whether current section is in the viewport or not
const isInViewport = function (element) {

    const rect = element.getBoundingClientRect(),
        viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top > viewHeight);
};

// Set sections as active
function makeActive() {
    for (let i = 0; i < sections.length; i++) {
        if(isInViewport(sections[i])){
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList.remove('your-active-class');
        }
    }
}

// listen for scroll events and call makeActive function
window.addEventListener("scroll", makeActive);


