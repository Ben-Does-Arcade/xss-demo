const attack1Field = document.querySelector("#attack1");
const attack1Run = document.querySelector("#attack1-run");
const attack1Clear = document.querySelector("#attack1-clear");

// Handle automatically resizing the textarea for attack 1 demo
attack1Field.style.height = "calc(" + attack1Field.scrollHeight + "px - 10px)"; // JS inline CSS calc! >:)
attack1Field.style.overflowY = "hidden";

attack1Field.addEventListener("input", () => {
    attack1Field.style.height = "auto";
    attack1Field.style.height = "calc(" + attack1Field.scrollHeight + "px - 10px)";
});

// Navigate to endpoint on button press or enter keystroke
function encodeAttack1() {
    window.open(
        "http://localhost:63342/xss-demo/attack1.html?username=" + encodeURI(attack1Field.value),
        null,
        "popup=true"
    );
}

attack1Run.addEventListener("click", encodeAttack1);

attack1Clear.addEventListener("click", (e) => {
    attack1Field.value = "";
    attack1Field.style.height = "auto";
    attack1Field.style.height = "calc(" + attack1Field.scrollHeight + "px - 10px)";
});

attack1Field.addEventListener("keypress", (e) => {
    if (e.ctrlKey && e.code === "Enter") {
        encodeAttack1();
    }
});
