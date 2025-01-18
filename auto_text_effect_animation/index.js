const containerEl = document.querySelector(".container")

const heroes = ["power rangers", "batman", "pedoman"]
let heroesIdx = 0
let charIdx = 0

updateText()
function updateText() {
    charIdx++
    containerEl.innerHTML= `
    <h1> i am a ${heroes[heroesIdx].slice(0,charIdx)}</h1>
    `;
    if(charIdx === heroes[heroesIdx].length) {
        heroesIdx++
        charIdx = 0
    }
    if(heroesIdx === heroes.length) {
        heroesIdx = 0
    }
   setTimeout(updateText, 200);
//    updateText()
}
