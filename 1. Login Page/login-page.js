var valid_id = "Test";
var valid_pw = "Login";
var id = document.getElementById("login");
var pw = document.getElementById("pw");
var submit = document.getElementById("submit");

submit.onclick = function() {
    if(valid_id == id.value)
    if(valid_pw == pw.value)
        window.location.href = "../Shopping/Shopping 1.html";
}
