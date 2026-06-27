let balance = 0;
let income = 0;
let expense = 0;

function addTransaction() {
    const desc = document.getElementById("desc").value;
    const amount = Number(document.getElementById("amount").value);

    if (!desc || !amount) {
        alert("Please enter description and amount");
        return;
    }

    balance += amount;

    if (amount > 0) {
        income += amount;
    } else {
        expense += Math.abs(amount);
    }

    document.getElementById("balance").innerText = balance;
    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = expense;

    const li = document.createElement("li");

    li.innerHTML =`
${desc}: ₹${amount}
<button onclick="this.parentElement.remove()">Delete</button>
`;


    document.getElementById("list").appendChild(li);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
