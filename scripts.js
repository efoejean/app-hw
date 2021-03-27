/* eslint-disable no-console */
document.querySelector("#username").addEventListener("focus", () => {
  console.log("Enter input!");
});

document.querySelector("#username").addEventListener("blur", () => {
  console.log("Left input");
});

document.querySelector("form").addEventListener("submit", () => {
  console.log("Submitted form!");
});
