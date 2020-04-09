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
 * Start Helper Functions
 * 
*/

function menu() {

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {
        const menuList = document.createElement('li');
        const listAnchor = document.createElement('a');
        listAnchor.innerText = 'section' + (i + 1);
        listAnchor.setAttribute('class', 'menu__link');

        //Scroll To Section
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

// active section
function makeActive() {
    for (let i = 0; i < sections.length; i++) {
        if(isInViewport(section[i])){
            section[i].classList.add('your-active-class');
        } else {
            section[i].classList.add('your-active-class');
        }
    }
}
makeActive();

const isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener("scroll", makeActive);

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


