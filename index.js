
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("2000");

    });

});

$(document).ready(function () {
    $("#flip2").click(function () {
        $("#panel2").slideToggle("2000");

    });

});

$(document).ready(function () {
    $("#flip3").click(function () {
        $("#panel3").slideToggle("2000");

    });

});
$(document).ready(function () {
    $("#flip4").click(function () {
        $("#panel4").slideToggle("2000");

    });

});
$(document).ready(function () {
    $("#flip5").click(function () {
        $("#panel5").slideToggle("2000");

    });

});


var loading = () => {

    var msg = "<h1> Please, wait Loading...</h1>";
    document.getElementById("container").innerHTML = msg;

}

var register = () => {



    //alert("User Registered Sucessfully..!");

    var username = document.getElementById("fname").value;
    var password = document.getElementById("pass").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;

    var formstatus = true;

    if (fname == "") {

        formstatus = false;
        document.getElementById("fname").style.borderColor = "red";
    }
    else {

        document.getElementById("fname").style.borderColor = "green";
    }
    if (password == "" || password.length < 6 || password != password) {

        formstatus = false;
        document.getElementById("pass").style.borderColor = "red";
    }
    else {

        document.getElementById("pass").style.borderColor = "green";
    }

    if (mobile == "") {

        formstatus = false;
        document.getElementById("mobile").style.borderColor = "red";

    } else {

        document.getElementById("mobile").style.borderColor = "green";
    }

    if (address == "") {

        formstatus = false;
        document.getElementById("address").style.borderColor = "red";
    } else {

        document.getElementById("address").style.borderColor = "green";
    }
    if (formstatus == false) {
        document.getElementById("errormsg").innerText = "User Not in Database";

    }
    else {

        document.getElementById("errormsg").innerText = "User Sucessfully Registered";

    }


}
var clear = () => {

    window.location.href = "http://127.0.0.1:5500/clario.html";
}

let logout = () => {

    alert("Hey! you have logged out");
    window.location.href = "http://127.0.0.1:5500/clario.html";
}

var save = () => {
    loading();
    var username = "Avinash Reddy K";
    var url = "http://localhost:1234/userlist" + name;
    fetch(url)
        .then(response => response.json())
        .then(userArray => {

            if (userArray.length > 0) {

                if (username === name) {

                    alert("Please SignUp ..!");

                } else {

                    alert("User is Logged-in Successfully");
                    window.location.href = "http://127.0.0.1:5500/logout.html";
                }

            }

        })

}

let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".input").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}





