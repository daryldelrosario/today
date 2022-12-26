let currentDate = new Date();
let displayDate = currentDate.toString();
const today = document.querySelector("#today");
today.textContent = displayDate;

let lastDate = "Mon Dec 26 2022 04:56:17 GMT-0500 (Eastern Standard Time)";
const lastStreak = document.querySelector("#last-streak");
lastStreak.textContent = lastDate;

const date = document.querySelector("#theDate");
let copiedDate = document.querySelector("#today").textContent;
function copyDate() {
    try {
        navigator.clipboard.writeText(copiedDate);
        console.log("First One");
        alert("Copied " + copiedDate);
    } catch(err) {
        console.log("Second One");
        alert("Failed to copy: " , err);
    }
}

console.log("Hello, World!");