// Inject XSS - FUN!
const params = new URLSearchParams(window.location.search);
const content = document.querySelector("#xss-content");

document.addEventListener("DOMContentLoaded", () => {
    content.innerHTML = "Hello, " + params.get("username") + "!";  // innerHTML is the reason this works
});

// Handle toggling the navigation between "Back" and "Close"
const navButton = document.querySelector("#nav-back");

if (window.opener && window.opener !== window) {
    navButton.href = "#";
    navButton.innerHTML = "&cross; Close";

    navButton.addEventListener("click", () => {
        window.close();
    });
}
