import Login from "./Components/Login";
import apiHelpers from "./apiHelpers";

console.log("Client Side is wired up!");

buildPage();

function buildPage() {
  login();
}

function login() {
  const loginElem = document.querySelector(".login-button");
  loginElem.addEventListener("click", () => {
    const page = document.querySelector(".Page");
    page.innerHTML = Login();
  });
}
