// This script updates the active class on the navigation links 
// based on the current URL

document.addEventListener("headerLoaded", function() {
    updateActiveNavLink();
});

document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector(".nav")) {
        updateActiveNavLink();
    }
});

function updateActiveNavLink() {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // get the filename from the path
    const currentPage = currentPath.split("/").pop() || "index.html";

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav a");

    // Loop through each link and compare it with the current path
    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkHref = link.getAttribute("href");

        link.classList.remove("active");

        // Check if the current path matches the link path
        if (currentPage === linkHref) {
            // Add the active class to the matching link
            link.classList.add("active");
        }
        else if (currentPage === "" || currentPage === "/" && linkHref.endsWith("index.html")) {
            link.classList.add("active"); 
        }
    });
};