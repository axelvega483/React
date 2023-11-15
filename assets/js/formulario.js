function validar() {
    let esvalido = true;
    //validacion para nombre
    let txtnom = document.getElementById("nombre").value;
    let errornom = document.getElementById("errorNombre");
    if (txtnom === null || txtnom === '') {
        esvalido = false;
        errornom.innerHTML = "Debe ingresar un Nombre";
    } else {
        errornom.innerHTML = "";
    }
    //validacion para apellido
    let txtape = document.getElementById("apellido").value;
    let errorape = document.getElementById("errorApellido");
    if (txtape === null || txtape === '') {
        esvalido = false;
        errorape.innerHTML = "Debe ingresar un Apellido";
    } else {
        errorape.innerHTML = "";
    } //validacion para email
    let txtemail = document.getElementById("email").value;
    let erroremail = document.getElementById("errorEmail");
    if (txtemail === null || txtemail === '') {
        esvalido = false;
        erroremail.innerHTML = "Debe ingresar un Email";
    } else {
        erroremail.innerHTML = "";
    }
    // Validación para contraseña
    let txtPassword = document.getElementById("contraseña").value;
    let errorPassword = document.getElementById("errorContraseña");
    if (txtPassword === null || txtPassword === '') {
        esvalido = false;
        errorPassword.innerHTML = "Debe ingresar una contraseña";
    } else if (txtPassword.length < 8) {
        esvalido = false;
        errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
    } else {
        errorPassword.innerHTML = "";
    }
    return esvalido;
} 