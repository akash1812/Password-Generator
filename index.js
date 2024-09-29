let passText = document.getElementById("passContainer");
let genBtn = document.getElementById("genBtn");
let slider = document.getElementById("myRange");

// Password generation function that takes length from slider value
const randomPass = (length) => {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '$', '*'];
    let password = "";

    // Generate password of length characters
    for (let i = 0; i < length; i++) {
        password += options[Math.floor(Math.random() * options.length)];
    }
    return password;
};

let BtnVal = document.getElementById("btn");
slider.addEventListener('input', () => {
    let btnValue = slider.value; // Fetch the updated slider value
    btn.innerText = btnValue;
});
// Button click event listener
genBtn.addEventListener("click", () => {
    // Clear existing password text
    passText.innerHTML = "";

    // Get the current slider value
    let passwordLength = slider.value;

    // Create a new div and set the generated password
    let newDiv = document.createElement('div');
    newDiv.textContent = randomPass(passwordLength); // Pass slider value (length)

    // Append the new password div to the container
    passText.appendChild(newDiv);

    newDiv.style.fontSize = "20px";
    newDiv.style.color = "black";
    newDiv.style.fontWeight = "bold";
    newDiv.style.margin = "10px 0";
});
