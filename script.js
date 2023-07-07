var viewButton = document.getElementById("view-button");
var toggleElements = document.querySelectorAll(".dark-mode, .light-mode");

// Get the current mode from localStorage
var currentMode = localStorage.getItem("mode");

// Set the theme based on the stored data
if (currentMode === "dark") {
  toggleTheme(toggleElements, "dark");
} else {
  toggleTheme(toggleElements, "light");
}

// Toggle theme and store preference on button click
viewButton.addEventListener("click", function () {
  toggleElements.forEach(function (element) {
    element.classList.toggle("dark-mode");
    element.classList.toggle("light-mode");
  });

  // Update localStorage with the current mode
  if (toggleElements[0].classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});


/**
 * Changes mode to input mode (either "dark" or "light")
 * 
 * @param {*} elements - list of elements to update
 * @param {*} theme  - wanted mode
 */
function toggleTheme(elements, theme) {
  if (theme === "dark") {
    elements.forEach(function (element) {
      element.classList.add("dark-mode");
      element.classList.remove("light-mode");
    });
  } else if (theme === "light") {
    elements.forEach(function (element) {
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");
    });
  }
}
