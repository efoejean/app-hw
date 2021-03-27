document.querySelector("#username").addEventListener("focus", () => {
  console.log("Enter input!");
});

document.querySelector("#username").addEventListener("blur", () => {
  console.log("Left input");
});
