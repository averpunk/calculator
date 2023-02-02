// let firstName = "Hanna"
// let lastName = "Averkamp-Peters"

// let fullName = firstName + " " + lastName

// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"

// function greetLinda() {
//     console.log(greeting + ", " + name + "!")
// }

// greetLinda()

// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)

// let errorParagraph = document.getElementById("error")
// console.log(error)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

let sumEl = document.getElementById("sum-el")

console.log(sumEl)