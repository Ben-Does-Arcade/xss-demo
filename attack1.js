const params = new URLSearchParams(window.location.search);
const content = document.querySelector("#xss-content");

content.innerHTML = "Hello, " + params.get("username") + "!";
