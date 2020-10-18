

function enviar(){

    var nombre = document.getElementById('nombres').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    expreEmail = /\w+@\w+\.+[a-z]/;

    if(nombre === '' || correo === '' || mensaje === ''){
        alert('Es necesario llenar todos los campos')
        return false;
    } 
    else if(!expreEmail.test(correo)){
        alert('Correo no valido')
        return false;
    }
    else {
        alert('Correo enviado')
        return false;
    }
    

}

