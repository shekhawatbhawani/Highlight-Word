const wordLength = document.querySelector("input");
const wordColor = document.querySelector("#color-picker");
const para = document.querySelector("p");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let backColor = wordColor.value;
    para.innerHTML = para.innerText
    .split(" ")
    .map((word) =>
        word.length >= wordLength.value ? `<span style="background-color: ${backColor}">${word}</span>` : word
    )
    .join(" ");
});
