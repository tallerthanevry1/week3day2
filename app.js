// get the button in a variable
const firstButton = document.querySelector(".click-events button")
console.log(firstButton)
console.dir(firstButton)


// add a clickevent
// firstButton.onclick = function(){
//    alert("This Works")
// }

// add a clickevent - method #2

function handleClick(){
    alert("This Works")
}

firstButton.addEventListener("click", handleClick)


// store the block in variables
const black = document.querySelector(".bubble")
const pink = document.querySelector(".bubble div")
console.log(black)
console.log(pink)

// store the block in variables
const black = document.querySelector(".bubble")
const pink = document.querySelector(".bubble div")
console.log(black)
console.log(pink)

black.addEventListener("click", function(){
    console.log("black")
})

pink.addEventListener("click", function(){
    console.log("pink")
})

black.addEventListener("click", function(){
    console.log("black")
})

pink.addEventListener("click", function(){
    console.log("pink")
})

// Keyboard Events
window.addEventListener("keypress", function(event){
    console.log(event)
})

// Keyboard Events
window.addEventListener("keydown", function(event){
    if(event.altKey && event.key === "g"){
        alert("You did the think")
    }
    console.log(event)
})

// Keyboard Events
window.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "g"){
        alert("You did the think")
    }
    console.log(event)
})

// Handling Form Submit events
const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
console.log(form)
console.log(input)


// Handling Form Submit events
const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
console.log(form)
console.log(input)

form.addEventListener("submit", function(event){
    event.preventDefault()// <-- prevent refresh
    console.log(input.value)
})