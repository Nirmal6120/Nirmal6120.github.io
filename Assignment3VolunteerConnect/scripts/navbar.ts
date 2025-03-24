// Author Name: Nirmal Patel, Jalpan Patel
// Group 9
// Date: 21/2/25
// Description: This is the navbar TypeScript file for the website.
// Date: 20/03/2025
// Description: it will be navbar.ts

document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn: boolean = localStorage.getItem("isLoggedIn") === "true";

    const loginNav: HTMLElement | null = document.getElementById("loginNav");
    const logoutNav: HTMLElement | null = document.getElementById("logoutNav");

    if (loginNav && logoutNav) {
        if (isLoggedIn) {
            loginNav.classList.add("d-none");
            logoutNav.classList.remove("d-none");
        }

        logoutNav.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            window.location.href = "login.html"; // Redirect to login page
        });
    } else {
        console.error("Navbar elements not found in the DOM.");
    }
});
