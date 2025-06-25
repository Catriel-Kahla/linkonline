let userCheck = {
    "user": "admin",
    "pass": "8328"
}

function sessionIn () {
    if ((document.getElementById("idUser").value == userCheck.user)&&(document.getElementById("idPass").value == userCheck.pass)){
        document.getElementById("info").innerHTML = "Iniciando...";
        sessionStorage.setItem(user, document.getElementById("idUser").value)

        setTimeout(function(){window.location.href = "view/inicio.html"}, 2000);
    } else {
        document.getElementById("info").innerHTML = "X - Credenciales incorrectas";
        setTimeout(function(){document.getElementById("info").innerHTML = ""}, 2000);
    }
}
