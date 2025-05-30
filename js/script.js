document.addEventListener("DOMContentLoaded", function () {
    fetch("templates/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading content:", error));
});