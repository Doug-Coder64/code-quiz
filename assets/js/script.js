const containerEl = document.querySelector("#container");
console.log(containerEl);



const questions = {
    q: "What color is the sky?"
}

//start screen that will display when the user is ready to take quiz
function startScreen() {
    //start screen elements
    const h2El = document.createElement("h2");
    const pEl = document.createElement("p");
    const btnEl = document.createElement("button");

    containerEl.appendChild(h2El);
    containerEl.appendChild(pEl);
    containerEl.appendChild(btnEl);
    h2El.textContent = "Coding Quiz Challenge";
    pEl.textContent = "Test your coding knowledge with these questions!";
    btnEl.textContent = "Start Quiz";
    btnEl.style = "width: 30%; margin-top: 40px;";

}

startScreen();
