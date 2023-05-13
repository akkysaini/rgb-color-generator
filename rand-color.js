const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);               // Math.floor returns integer and Math.random() returns random numbers between 0.01 - 0.9.
    const randomColorNum = `rgb(${red}, ${green}, ${blue})`;
    return randomColorNum;
};

mainButton.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
});