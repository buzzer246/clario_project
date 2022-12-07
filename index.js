
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


var loading = () => {

    var msg = "<h1> Please, wait Loading...</h1>";
    document.getElementById("container").innerHTML = msg;
}
var save = () => {
    loading();
    var username = "Avinash Reddy K";
    var url = "http://localhost:1234/userlist"+name;
    fetch(url)
        .then(response => response.json())
        .then(userArray => {

            if (userArray.length > 0) {

                if (username == name) {

                    alert("User is Logged-in Successfully");
                } else {

                    alert("Please SignUp ..!");
                    window.location.href = "http://localhost:1234/userlist";
                }

            }

        })

}


var clear = () =>{

    window.location.href="http://127.0.0.1:5500/clario.html";
}