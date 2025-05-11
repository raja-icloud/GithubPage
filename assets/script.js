const coins = {
    "one-rs": 100,
    "two-rs": 100,
    "five-rs": 100,
    "ten-rs": 100,
}

const oneRs = document.getElementById("one-rs");
const twoRs = document.getElementById("two-rs");
const fiveRs = document.getElementById("five-rs");
const tenRs = document.getElementById("ten-rs");

function updateCoins() {
    oneRs.value = coins["one-rs"]; // coins.one-rs
    twoRs.value = coins["two-rs"];
    fiveRs.value = coins["five-rs"];
    tenRs.value = coins["ten-rs"];
}

updateCoins();


const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {
   try {
    const widhdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = parseInt(widhdrawInput.value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }

    // number of coins
    const oneRsCount = Math.floor(withdrawAmount / 1);
    const twoRsCount = Math.floor(withdrawAmount / 2);
    const fiveRsCount = Math.floor(withdrawAmount / 5);
    const tenRsCount = Math.floor(withdrawAmount / 10);

    // check if coins are available
    if (coins["one-rs"] < oneRsCount) {
        alert("Not enough 1 Rs coins available.");
    }
    if (coins["two-rs"] < twoRsCount) {
        alert("Not enough 2 Rs coins available.");
    }
    if (coins["five-rs"] < fiveRsCount) {
        alert("Not enough 5 Rs coins available.");
    }
    if (coins["ten-rs"] < tenRsCount) {
        alert("Not enough 10 Rs coins available.");
    }
   } catch (error) {
    console.error("Error parsing withdraw amount:", error);
   }
   
});
