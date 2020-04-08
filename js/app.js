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



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const sections = document.getElementsByTagName('section');
const navBar = document.querySelector('#navbar__list');

function menu() {

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 4; i++) {
        const menuList = document.createElement('li');
        const listAnchor = document.createElement('a');
        listAnchor.innerText = 'section' + i;
        listAnchor.setAttribute('href', '#anchor' + i);
        menuList.appendChild(listAnchor);
        fragment.appendChild(menuList);

    }
    navBar.appendChild(fragment);

}
menu();

function sectionScroll() {
    for(let i = 1; i <= 4; i++) {
        const element = document.getElementById('anchor' + i);
        element.addEventListener('click', function() {
            const elementToScroll = document.getElementById('section' + i)
            elementToScroll.scrollIntoView({ block: 'start', behavior: 'smooth'})
        })
    }
}
sectionScroll();





/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


