// Inject XSS - FUN!
const params = new URLSearchParams(window.location.search);
const content = document.querySelector("#xss-content");

document.addEventListener("DOMContentLoaded", () => {
    // Waiting for load so the content displays before the alert() does
    content.innerHTML = "Hello, " + params.get("username") + "!";  // innerHTML is the reason this works
});

// Handle toggling the navigation between "Back" and "Close"
const navButton = document.querySelector("#nav-back");

if (window.opener && window.opener !== window) {
    // In a pop-up, change button text and destination
    navButton.innerHTML = "&cross; Close";

    navButton.addEventListener("click", () => {
        window.close();
    });
} else {
    // In normal tab, change destination to point to history
    navButton.addEventListener("click", () => {
        history.back();
    });
}
