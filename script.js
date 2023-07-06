var viewButton = document.getElementById("view-button");
var toggleElements = document.querySelectorAll(".dark-mode");
viewButton.addEventListener("click", function() {
    toggleElements.forEach(function(element){
        element.classList.toggle("dark-mode");
        element.classList.toggle("light-mode");
    });
});