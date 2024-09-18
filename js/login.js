
document.getElementById("btnLogin").addEventListener('click', function (event) {
    event.preventDefault();
    // console.log("login button clicked");

    const phoneNumber = document.getElementById("phoneNumber").value;
    const pin = document.getElementById("pin").value;
    // console.log(phoneNumber, pin);

    if (phoneNumber.length !== 11 || pin.length !== 4) {
        alert("Invalid Phone Number or Pin");
    }
    else {
        window.location.href = "home.html";
    }

})