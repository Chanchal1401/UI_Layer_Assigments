const div1 = document.getElementById("div1");
const select = document.getElementById("colors");

function onClick() {
  const color = select.options[select.selectedIndex].value;
  div1.style.backgroundColor = color;
}
