function buttonClick() {
    let button = document.getElementById("menuButton");
    button.addEventListener("click", returnButton)
}

function returnButton() {
    fetch("templates/button.html") // Fetch the file
        .then(response => response.text()) // Convert response to text
        .then(data => { // Use a different name for the resolved content
            const button = document.getElementById("menuButton"); // Get the button element
            button.innerHTML = data; // Insert fetched HTML
            let back = document.getElementById("backButton"); // Get the back button
            if (back) {
                back.addEventListener("click", revertButton); // Attach click event to revert button
            }
        })
        .catch(error => {
            console.error("Error loading button:", error); // Handle errors properly
        });
}
function revertButton() {
    const button = document.getElementById("menuButton"); 
    if (button) {
        button.removeEventListener("click", returnButton); // Prevent retriggering
        button.outerHTML = `<button id="menuButton" class="button">Menu</button>`; // Restore original button

        // Reattach event listener to the new button
        document.getElementById("menuButton").addEventListener("click", returnButton);
    }
}
buttonClick(); // Initial call to set up the button