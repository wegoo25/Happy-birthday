// ===== PIN PASSWORD =====
const correctPassword = "2705";
let enteredPin = "";

function press(num) {
    if (enteredPin.length < 4) {
        enteredPin += num;
        updateDisplay();
    }
}

function clearPin() {
    enteredPin = enteredPin.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("pinDisplay").innerText =
        enteredPin.padEnd(4, "•");
}

function checkPassword() {
    if (enteredPin === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Wrong PIN :(";
        enteredPin = "";
        updateDisplay();
    }
}

// SCROLL
function scrollToLetter() {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
}

// TYPING LETTER
const text = `Happy Birthday babyyyyyy. You are my happiness and my favorite person in the world, you're the best thing that ever happened to me, I love you with all my heart. Thank you for always loving me the way you do, the way i want to be loved, you're the best. I hope this year brings you endless happiness, and I hope for more bright days together. I love you and I will always do 💙`;

let index = 0;

function typeLetter() {
    if (index < text.length) {
        document.getElementById("typedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeLetter, 35);
    }
}

window.addEventListener("scroll", () => {
    const letter = document.querySelector(".letter-box");
    const position = letter.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
        typeLetter();
    }
});

// FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 500);
