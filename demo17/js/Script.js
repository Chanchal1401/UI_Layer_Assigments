document.getElementById("Red").addEventListener("change", function () {
  document.querySelector('label[for="Red-1"]').classList.add("red");
});

document.getElementById("Green").addEventListener("change", function () {
  document.querySelector('label[for="Green"]').classList.add("green");
});

document.getElementById("Blue").addEventListener("change", function () {
  document.querySelector('label[for="Blue"]').classList.add("blue");
});

document.getElementById("Arial").addEventListener("change", function () {
  document.querySelector('label[for="Arial"]').classList.add("arial");
});

document.getElementById("monospace").addEventListener("change", function () {
  document.querySelector('label[for="monospace"]').classList.add("monospace");
});

document.getElementById("cursive").addEventListener("change", function () {
  document.querySelector('label[for="cursive"]').classList.add("cursive");
});
