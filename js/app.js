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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// defining some global variables
const unorderedList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const docFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// building the Navigation Bar and putting the list items in the the ul ( unordered list ) which is also the " Sections " li = sections 
function buildNavMenu() {
  for (const section of sections) {
    const sectionId = section.id;
    const sectionTitle = section.getAttribute('data-nav');
    const listItem = document.createElement("li");
    const anchorLink = document.createElement("a");
    anchorLink.setAttribute("href", `#${sectionId}`);
    anchorLink.setAttribute("class", "menu__link");
    anchorLink.textContent = sectionTitle;
    anchorLink.addEventListener("click", function (event) {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
        block: "center" // to scroll into the center of the element
      });
    });

    listItem.appendChild(anchorLink);
    docFragment.appendChild(anchorLink);
  }
  // appending the fragment to the ul 
  unorderedList.appendChild(docFragment);
}
window.addEventListener("load", buildNavMenu);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// Scroll to section on link click
// making the section active when its in the viewport ( or almost like 80% of it )
window.addEventListener("scroll", function () {
  for (const section of sections) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const viewHeight = window.innerHeight;
    const activeLink = unorderedList.querySelector(`a[href="#${section.id}"]`);
    if (sectionTop > 0 && sectionBottom * 0.8 <  viewHeight) {
      section.classList.add("active");
      activeLink.classList.add("active");
    }
    else {
      if (activeLink) {
        section.classList.remove("active");
        activeLink.classList.remove("active");
      }
    }
  }
});
