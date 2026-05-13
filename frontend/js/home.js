// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navWrapper = document.getElementById("navWrapper");

menuToggle.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
});

// =========================
// LOGIN SYSTEM
// =========================

const loginBtn = document.getElementById("loginBtn");
const profileCard = document.getElementById("profileCard");
const userName = document.getElementById("userName");

// Check Login Status
let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {

    loginBtn.classList.add("hidden");

    profileCard.classList.remove("hidden");

    userName.innerText =
        localStorage.getItem("userName") || "Farmer";
}

// Login
loginBtn.addEventListener("click", () => {

    const name = prompt("Enter your name");

    if (name && name.trim() !== "") {

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("userName", name);

        location.reload();
    }
});

// Logout
function logoutUser() {

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("userName");

    location.reload();
}

// =========================
// PROTECTED NAVIGATION
// =========================

function checkLogin(module) {

    const loggedIn =
        localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {

        alert("Please login first!");

        return;
    }

    // Navigation
    if (module === "modules") {
        window.location.href = "modules.html";
    }

    if (module === "analytics") {
        window.location.href = "analytics.html";
    }

    if (module === "reports") {
        window.location.href = "reports.html";
    }
}