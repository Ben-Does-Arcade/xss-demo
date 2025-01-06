const attack1Field = document.querySelector("#attack1");
const attack1Run = document.querySelector("#attack1-run");
const attack1Copy = document.querySelector("#attack1-copy");
const attack1Clear = document.querySelector("#attack1-clear");
const attack1Label = document.querySelector("#attack1-label");
const attack1CookieInput = document.querySelector("#attack1-cookie");
const attack1CookieValue = document.querySelector("#attack1-cookie-value");
const attack1CookieSet = document.querySelector("#attack1-cookie-set");
const attack1CookieReset = document.querySelector("#attack1-cookie-reset");

// Add a cookie for testing
document.cookie = "session=my_secret_session_token";

// Handle automatically resizing the textarea for attack 1 demo
attack1Field.style.height = "calc(" + attack1Field.scrollHeight + "px - 10px)"; // JS inline CSS calc! >:)
attack1Field.style.overflowY = "hidden";

attack1Field.addEventListener("input", () => {
    attack1Field.style.height = "auto";
    attack1Field.style.height = "calc(" + attack1Field.scrollHeight + "px - 10px)";
});

// Navigate to endpoint on button press or enter keystroke
function encodeAttack1() {
    return "http://localhost:63342/xss-demo/attack1.html?username=" + encodeURI(attack1Field.value);
}

function openAttack1() {
    window.open(
        encodeAttack1(),
        null,
        "popup=true"
    );
}

attack1Run.addEventListener("click", openAttack1);  // Handle run button press
attack1Field.addEventListener("keypress", (e) => {  // Handle enter keystroke
    if (e.ctrlKey && e.code === "Enter") {
        e.preventDefault();  // Prevent strange things from happening by the browser
        openAttack1();
    }
});

// Handle clear button press
attack1Clear.addEventListener("click", () => {
    attack1Field.value = "";
    attack1Field.style.height = "auto";
    attack1Field.style.height = "calc(" + attack1Field.scrollHeight + "px - 10px)";
});

// Handle copy link button press
attack1Copy.addEventListener("click", () => {
    navigator.clipboard.writeText(encodeAttack1()).then(() => {
        // Show that the text was copied successfully
        const originalText = attack1Label.textContent;
        attack1Label.style.color = "green";
        attack1Label.innerHTML = "&check; Copied link to clipboard!";

        // Reset after 1.5 seconds
        setTimeout(() => {
            attack1Label.style.color = "black";
            attack1Label.textContent = originalText;
        }, 1500);
    });
});

// Handle cookie set button press
function setCookie() {
    document.cookie = "session=" + attack1CookieInput.value;
    attack1CookieValue.textContent = attack1CookieInput.value;
    attack1CookieInput.value = "";
}

attack1CookieSet.addEventListener("click", setCookie);    // Handle save button press
attack1CookieInput.addEventListener("keypress", (e) => {  // Handle enter keystroke
    if (e.code === "Enter") {
        setCookie();
    }
});

// Handle cookie reset button press
attack1CookieReset.addEventListener("keypress", () => {
    document.cookie = "session=my_secret_session_token";
});
