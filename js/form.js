function validarDatos(event) {
  event.preventDefault();
  
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  
  var errorNombre = document.getElementById("errorNombre");
  var errorApellido = document.getElementById("errorApellido");
  var errorEmail = document.getElementById("errorEmail");
  var errorMensaje = document.getElementById("errorMensaje");
  
  var valido = true;
  
  var regexSoloLetras = /^[a-zA-Z]+$/; // Expresión regular que solo permite letras
  
  if (nombre === "") {
    errorNombre.innerHTML = "Por favor ingrese su nombre";
    valido = false;
  } else if (!regexSoloLetras.test(nombre)) {
    errorNombre.innerHTML = "Por favor ingrese un nombre válido";
    valido = false;
  } else {
    errorNombre.innerHTML = "";
  }
  
  if (apellido === "") {
    errorApellido.innerHTML = "Por favor ingrese su apellido";
    valido = false;
  } else if (!regexSoloLetras.test(apellido)) {
    errorApellido.innerHTML = "Por favor ingrese un apellido válido";
    valido = false;
  } else {
    errorApellido.innerHTML = "";
  }
  
  if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
    errorEmail.innerHTML = "Por favor ingrese un correo electrónico válido";
    valido = false;
  } else {
    errorEmail.innerHTML = "";
  }
  
  if (mensaje === "") {
    errorMensaje.innerHTML = "Por favor ingrese un mensaje";
    valido = false;
  } else {
    errorMensaje.innerHTML = "";
  }
  
  if (valido) {
    // var datos = "<table><tr><th>Campo</th><th>Valor</th></tr><tr><td>Nombre:</td><td>" + nombre + 
    // "</td></tr><tr><td>Apellido:</td><td>" + apellido + "</td></tr><tr><td>Email:</td><td>" + email + 
    // "</td></tr><tr><td>Mensaje:</td><td>" + mensaje + "</td></tr></table>";


     var datos = "<div><p> Nombre: " + nombre + 
     "</p> <p> Apellido: " + apellido + 
     "</p> <p> Email: " + email + 
     "</p> <p> Mensaje: </br>" + mensaje + "</p></div>";

    Swal.fire({
      title: 'Confirme sus datos',
      html: datos,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "mailto:juancgart@gmail.com?subject=Formulario de contacto&body="
         + datos.replace(/\n/g, "%0A");
      }
    });
}
}









  