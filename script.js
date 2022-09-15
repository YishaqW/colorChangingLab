// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
// Set the background color of the li to the random color
// Append the li to the ul
// 2. Create Function (reset)
// Should remove all li children from the ul. 
// Should set background color to white.
// Attach functions to buttons

function reset() {
const ColorArray = [
"red",
"yellow",
"magenta",
"cyan",
"blue",
"black",
"gray",
"teal",
"green",
"purple",
"violet",
];

function generate (){
  let randColor = ColorArray[Math.floor(Math.random()* ColorArray.length)]
  const li = document.createElement("li")
  li.textContent = randColor
  li.style.backgroundColor = randColor
  body.style.backgroundColor = randColor
  li.style.color = "white"
  ul.appendChild(li)
  console.log(randColor)
}

const body = document.querySelector("body")
// body.addEventListener("click", reset)

const ul = document.querySelector("ul")

  while(ul.children.length > 0) {
    ul.children[0].remove();
  }
  ul.style.backgroundColor = 'white';
  console.log('reset')
}

const generateColorBtn = document.querySelector("#generate-color")

generateColorBtn.addEventListener("click", generate)

const resetColorBtn = document.querySelector("#reset-color")

resetColorBtn.addEventListener("click", reset)
ul.addEventListener("click", reset)
