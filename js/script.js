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
returnFooter();
pageNotFound();