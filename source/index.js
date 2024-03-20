const checkbox = document.querySelector("#checkbox");

console.log("index.js")

// Adds listener to checkbox
// When checkbox is clicked, toggle "hidden" attribute to OPPOSITE position
checkbox.addEventListener("click", (e) => {
    document.getElementById("continue-btn").toggleAttribute("hidden");
    
});