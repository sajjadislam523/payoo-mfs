

document.getElementById("btnAddmoney").addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const pin = document.getElementById("pin").value;
    const balance = document.getElementById("balance").innerText;

    if (pin.length !== 4) {
        alert("Invalid Pin");
    }
    else {
        const newBalance = parseFloat(balance) + parseFloat(amount);
        document.getElementById("balance").innerText = newBalance;
    }
})