// Get the navbar elements
var navbar = document.getElementById("navbar");
var navbarContainer = document.getElementById("navbar-container");
var navbarLogo = document.getElementById("navbar-logo");
var navbarSearch = document.getElementById("navbar-search");

// Append the toggle button to the navbar
navbar.appendChild(navbarToggle);

// Add a click event listener to the toggle button
navbarToggle.addEventListener("click", function() {
  // Toggle the aria-expanded attribute
  var expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);

  // Toggle the visibility of the navbar elements
  navbarContainer.classList.toggle("hidden");
});

// Add a resize event listener to the window
window.addEventListener("resize", function() {
  // If the window width is larger than 480px, show the navbar elements
  if (window.innerWidth > 480) {
    navbarContainer.classList.remove("hidden");
    navbarToggle.setAttribute("aria-expanded", "false");
  }
});

// Add a submit event listener to the search form
navbarSearch.addEventListener("submit", function(e) {
  // Get the value of the search input
  var query = this.elements["q"].value;

  // If the query is empty, prevent the form submission
  if (query === "") {
    e.preventDefault();
    alert("Please enter a keyword to search");
  }
});

