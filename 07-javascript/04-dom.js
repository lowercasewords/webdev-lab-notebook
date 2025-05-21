// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input_text1 = document.getElementById("userInput1");
let button1 = document.getElementById("copy");
let output1 = document.getElementsByClassName("output")[0];
// add an event listener on the target element
button1.addEventListener("click", copy_callback);
// callback function to handle event

function copy_callback(params) {
  let span = document.createElement("span");
  span.textContent = input_text1.value;
  output1.appendChild(span);
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
let input_text2 = document.querySelector("#userInput2");

input_text2.addEventListener("input", handleInput);

let div = document.createElement("div");
div.setAttribute("class", "output2");
document.querySelector("#inputEventExample").append(div);

// callback function to handle event
function handleInput(event) {
  console.log("click event", event);
  div.textContent = input_text2.value;
}
