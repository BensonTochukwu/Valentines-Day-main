let correctPin = "2004";

let currentInput = 0;

// Get pinpad input elements
const inputs = [
    document.getElementById("pinpad-input-1"),
    document.getElementById("pinpad-input-2"),
    document.getElementById("pinpad-input-3"),
    document.getElementById("pinpad-input-4")
];

let btns = document.getElementsByClassName("pinpad-btn");

for (let i = 0; i < btns.length; i++) {
    let btn = btns.item(i);
    if (btn.id && (btn.id === "submit-btn" || btn.id === "delete-btn")) continue;

    btn.addEventListener("click", (e) => {
        if (currentInput < inputs.length) {
            inputs[currentInput].value = e.target.value;
            inputs[currentInput].style.borderColor = "";
            currentInput++;
        }
    });
}

let submitBtn = document.getElementById("submit-btn");
let delBtn = document.getElementById("delete-btn");
let headerText = document.querySelector(".text-center");

function checkPin () {
    let enteredPin = inputs.map(input => input.value).join('');
    if (enteredPin.length < inputs.length) {
        inputs.forEach(input => {
            if (input.value === "") {
                input.style.borderColor = "red";
            }
        });
    } else if (enteredPin === correctPin) {
            window.location.href = "file:///C:/Users/Claynne%20Casampol/Personal%20Proj/Valentines%20Day/SecondsPage/SecondsPage.html"; 
    } else {
        headerText.innerText = "WRONG PASSWORD";
        inputs.forEach(input => input.value = "");
        currentInput = 0;
    }
}

submitBtn.addEventListener("click", checkPin);

delBtn.addEventListener("click", () => {
    if (currentInput > 0) {
        currentInput--;
        inputs[currentInput].value = "";
        inputs[currentInput].style.borderColor = "";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9" && currentInput < inputs.length) {
        inputs[currentInput].value = e.key;
        inputs[currentInput].style.borderColor = "";
        currentInput++;
    } else if (e.key === "Backspace" && currentInput > 0) {
        e.preventDefault();
        currentInput--;
        inputs[currentInput].value = "";
        inputs[currentInput].style.borderColor = "";
    } else if (e.key === "Enter") {
        e.preventDefault();
        checkPin();
    }
});