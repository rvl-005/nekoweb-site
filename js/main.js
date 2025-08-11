function returnFooter() {
    const footerContent = fetch("templates/footer.html") // Fetch the file
        .then(response => response.text()) // Convert response to text
        .then(data => { // Use a different name for the resolved content
            const footer = document.getElementById("footer"); // Get the footer element
            footer.innerHTML = data; // Insert fetched HTML
        })
        .catch(error => {
            handleFooterError(error); // Handle errors properly
        });

    return footerContent; // Return the fetch Promise (optional)
}

function pageNotFound(){
    fetch(window.location.href).then(response => {
        console.log("Checking page status...");
        if (!response.ok) {
            console.log("Redirecting to not_found.html...");
            window.location.href = "/templates/not_found.html";
        }
    }).catch(() => {
        console.log("Network error, redirecting...");
        window.location.href = "/templates/not_found.html";
    });
}

function toggleMode() {
    const lightSwitch = document.getElementById("lightSwitch");
    const webStyles = document.body;

    lightSwitch.addEventListener("click", switchLights);

    function switchLights() {
        webStyles.style.backgroundColor = "black";
        webStyles.style.color = "white";
        lightSwitch.removeEventListener("click", switchLights); // Remove the event listener after switching
        lightSwitch.addEventListener("click", revertMode); // Attach the revert function
    }
    function revertMode() {
        webStyles.style.backgroundColor = "white";
        webStyles.style.color = "black";
        lightSwitch.removeEventListener("click", revertMode); // Remove the revert listener
        lightSwitch.addEventListener("click", switchLights); // Reattach the event listener
    }
}

returnFooter();
pageNotFound();
toggleMode();