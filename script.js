const body = document.querySelector("body");
const size = document.querySelector(".size");
let sizeVal = 16;
const changeBtn = document.querySelector(".change-button");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
const column = document.querySelector(".column");
column.innerHTML = `<div class=box></div>`.repeat(sizeVal);
container.innerHTML = container.innerHTML.repeat(sizeVal);
let interval;

let darkenColor = (hex, amount) => {
    let num = parsenInt(hex, 16);
    let r = Math.max((num >> 16) - amount, 0);
    let g = Math.max(((num >> 8) & Ox00FF )- amount, 0);
    let b = Math.max((num & 0x0000FF) - amount, 0);
    return `#${(r << 16 | g << 8 | b).toString(16)}`
}

changeBtn.addEventListener("click", () => {
  if (size.value >= 16 && size.value <= 100) {
    sizeVal = size.value;
    container.innerHTML = `<div class="column"></div>`
    document.querySelector(".column").innerHTML = `<div class=box></div>`.repeat(sizeVal); // create columns
    container.innerHTML = container.innerHTML.repeat(sizeVal); // create rows
    document.querySelectorAll(".box").forEach(box => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = `#${randomColor}`
        });
        interval = setInterval(()=>{
            randomColor = darkenColor(randomColor, 15);
            box.style.backgroundColor = randomColor;
        }, 1000)
    });
  } else {
    alert("Value must be between 16 and 100");
  }
});

document.querySelectorAll(".box").forEach(box => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
    box.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = `#${randomColor}`
    });
});

container.addEventListener("mouseleave", (e) => {
    clearInterval(interval);
})