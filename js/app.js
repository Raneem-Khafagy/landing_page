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
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

const buildNavigation = () => {

  const fragment = document.createDocumentFragment();

  sections.forEach((navSection) => {
      const liTag = document.createElement('li');
      const aTag = document.createElement('a');
      aTag.innerText = navSection.getAttribute('data-nav');
      aTag.setAttribute('class', 'menu__link');

      // scroll to anchor ID using scroll to event
      aTag.addEventListener("click", () => {
          navSection.scrollIntoView({behavior: "smooth"});
          });
      liTag.appendChild(aTag);
      fragment.appendChild(liTag);
  });
  navigation.appendChild(fragment);


};
// Build menu

buildNavigation();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};

//scroll to the chosen section

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);
        // Set sections as active (highlight section and nav if section is in viewport)
        inviewport = () => elementOffset < 100 && elementOffset >= -100;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);
