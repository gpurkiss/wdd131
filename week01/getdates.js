document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
 