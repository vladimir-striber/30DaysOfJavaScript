let heading = document.querySelector(".heading");
// let headingText = "Welcome to 30 days of JavaScript";
heading.innerText = "Welcome to 30 days of JavaScript";

let button = document.querySelector(".button");
button.innerText = "Learn Python";
button.addEventListener("click", replaceLanguage);

function replaceLanguage() {
  if(button.innerText === "Learn Python") {
    heading.innerText = "Welcome to 30 days of Python";
    button.innerText = "Learn JavaScript";
  } else {
    heading.innerText = "Welcome to 30 days of JavaScript";
    button.innerText = "Learn Python";
  }

}