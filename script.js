
// var viewButton = document.getElementById("view-button");
// var toggleElements = document.querySelectorAll(".dark-mode"||".light-mode");
// viewButton.addEventListener("click", function() {
//     toggleElements.forEach(function(element){
//         element.classList.toggle("dark-mode");
//         element.classList.toggle("light-mode");
//     });
// });

var viewButton = document.getElementById("view-button");
var toggleElements = document.querySelectorAll(".dark-mode, .light-mode");

// Get the current mode from localStorage (if available)
var currentMode = localStorage.getItem("mode");

// Set the initial mode based on the stored preference
if (currentMode === "dark") {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
}else{
    document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
}

// Toggle mode and store preference on button click
viewButton.addEventListener("click", function() {
    toggleElements.forEach(function(element){
        element.classList.toggle("dark-mode");
        element.classList.toggle("light-mode");
    });

  // Update localStorage with the current mode
  if (toggleElements[0].contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});
