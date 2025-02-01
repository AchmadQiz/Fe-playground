const imageContainerEl = document.querySelector(".img-container")
const buttonEl = document.querySelector(".btn")

buttonEl.addEventListener("click", () => {
    let num = 10;
    addNewImages(num)
})

function addNewImages(num) {
    for (i = 0; i <= num; i++) {
       let img = document.createElement("img")
       img.src = `https://picsum.photos/300?random=${Math.random() * 2000}`
       console.log(img)
       imageContainerEl.appendChild(img)
    }
}