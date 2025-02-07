function validateForm() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let Message = document.getElementById("message");

    if (login === "" || password === "") {
        Message.style.display = "block"; 
    } else {
        Message.style.display = "none"; 
    }
}