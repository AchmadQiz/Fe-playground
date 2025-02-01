const textAreaEl = document.getElementById("textarea")
const totalCharaEl = document.querySelector(".total-chara")
const remainingCharaEl = document.querySelector(".remaining-chara")

textAreaEl.addEventListener("keyup", () => {
    calculateChara()
})

function calculateChara() {
    maxlength = textAreaEl.maxLength
    totalLength = textAreaEl.textLength
    remainingChara = maxlength - totalLength
    totalCharaEl.textContent = totalLength
    remainingCharaEl.textContent = remainingChara
}