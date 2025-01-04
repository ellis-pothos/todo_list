import "./styles.css";

console.log("testing!")

const content = document.querySelector("#content");
content.id = "content";

const div = document.createElement("div");
div.id = "testDiv";
div.textContent = "testing testing testing"
content.appendChild(div);

