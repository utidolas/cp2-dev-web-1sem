function welcome_alert(){
    alert("Seja Bem Vindo")
}


function change_color(color1, color2){
    document.body.style.background = "linear-gradient(45deg,"+color1+","+color2+")";
}


function validate(){
    let user = document.getElementById("user").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;

    if(user == "" || tel == "" || email == ""){
        alert("Preencha todos os campos")
    }else{
        alert("Dados registrados!")
        window.open('menu.html')
    }
}

