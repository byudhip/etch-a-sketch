// set randomColor Math.floor(Math.random()*16777215).toString(16)
// extra credit
// create function to darken color
// add mouseenter event listener to container, change target background color to "#" + randomColor (which is Math.floor(Math.random()*16777215).toString(16))
// set interval to run darken color every second
// clear interval on mouseleave

const body = document.querySelector("body");
const size = document.querySelector(".size");
let sizeVal = 16;
const changeBtn = document.querySelector(".change-button");
const container = document.querySelector(".container");
const column = document.querySelector(".column");
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const box = `<div class=box></div>`;
column.innerHTML = box.repeat(sizeVal);
container.innerHTML = container.innerHTML.repeat(sizeVal);

changeBtn.addEventListener("click", () => {
  if (size.value >= 16 && size.value <= 100) {
    sizeVal = size.value;
    // container.innerHTML = "";
    container.innerHTML = `<div class="column"></div>`
    document.querySelector(".column").innerHTML = `<div class=box></div>`.repeat(sizeVal);
    container.innerHTML = container.innerHTML.repeat(sizeVal);
  } else {
    alert("Value must be between 16 and 100");
  }
});
