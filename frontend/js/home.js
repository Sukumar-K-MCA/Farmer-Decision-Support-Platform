function goToModule() {
    alert("Navigate to input form next");
}

// Toggle Theme
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Dropdown Menu
function toggleMenu() {
    let menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking outside
window.onclick = function(e) {
    if (!e.target.closest(".profile")) {
        document.getElementById("dropdownMenu").style.display = "none";
    }
};