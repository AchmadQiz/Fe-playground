const birthdayEl = document.getElementById("birthday")
const btnEl = document.getElementById("btn")
const resultEl = document.getElementById("result")

btnEl.addEventListener("click", () => {
    const birthday = birthdayEl.value
    if (birthday == "") {
        resultEl.innerText = "Please input your birth day"
    } else {
        age = getAge(birthday)
        if (age > 0) {
            resultEl.textContent = `Your age is ${age} ${age> 1? "years" : "year"} old`
        } else {
            resultEl.textContent = `Cannot calculate future birth. please input a valid birth date`
        }
    }
})

function getAge(birthday) {
    const birthDate = new Date(birthday)
    const today = new Date()

    if (birthDate.getFullYear() > today.getFullYear()) {
        return -1
    }

    let age = today.getFullYear() - birthDate.getFullYear()
    let monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || monthDiff == 0 && today.getDate() < birthDate.getDate()) {
        age--
    }
    return age
}