const body = document.querySelector("body");
const size = document.querySelector(".size");
let sizeVal = 16;
const changeBtn = document.querySelector(".change-button");
const container = document.querySelector(".container");
const column = document.querySelector(".column");
column.innerHTML = `<div class=box></div>`.repeat(sizeVal);
container.innerHTML = container.innerHTML.repeat(sizeVal);
let hoverNum = 1;

let darkenColor = (rgb, percentage) => {
  let [r, g, b] = rgb.match(/\d+/g).map(Number);

  r = Math.max(r - Math.floor(r * (percentage / 100)), 0);
  g = Math.max(g - Math.floor(g * (percentage / 100)), 0);
  b = Math.max(b - Math.floor(b * (percentage / 100)), 0);

  return `rgb(${r}, ${g}, ${b})`;
};

changeBtn.addEventListener("click", () => {
  if (size.value >= 16 && size.value <= 100) {
    sizeVal = size.value;
    container.innerHTML = `<div class="column"></div>`;
    document.querySelector(".column").innerHTML =
      `<div class=box></div>`.repeat(sizeVal); // create columns
    container.innerHTML = container.innerHTML.repeat(sizeVal); // create rows
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("mouseenter", (e) => {
        if (!e.target.style.backgroundColor) {
          let initialColor = `rgb(${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )})`;
          e.target.style.backgroundColor = initialColor;
          console.log(`this is initial color ${initialColor}`);
        } else {
          let currentColor = e.target.style.backgroundColor;
          let darkenedColor = darkenColor(currentColor, 15);
          e.target.style.backgroundColor = darkenedColor;
          console.log(
            `hover number ${hoverNum}, color value is ${darkenedColor}`
          );
          hoverNum += 1;
        }
      });
    });
  } else {
    alert("Value must be between 16 and 100");
  }
});

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    if (!e.target.style.backgroundColor) {
      let initialColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      e.target.style.backgroundColor = initialColor;
      console.log(`this is initial color ${initialColor}`);
    } else {
      let currentColor = e.target.style.backgroundColor;
      let darkenedColor = darkenColor(currentColor, 15);
      e.target.style.backgroundColor = darkenedColor;
      console.log(`hover number ${hoverNum}, color value is ${darkenedColor}`);
      hoverNum += 1;
    }
  });
});
