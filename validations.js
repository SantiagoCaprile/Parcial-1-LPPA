window.onload = function () {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const botonEnviar = document.getElementById("boton-enviar");
  const form = document.getElementById("formulario");
  const modal = document.getElementById("modal");
  const equis = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  function mostrarModal(){
    modal.style.display = "block";
    document.getElementById("nombre-final").innerText = "Nombre: " + nombre.value;
    document.getElementById("apellido-final").innerText = "Apellido: " + apellido.value;
    document.getElementById("email-final").innerText = "Email: " + email.value;
    document.getElementById("edad-final").innerText = "Edad: " + edad.value + " años";
    document.getElementById("sexo-final").innerText = "Sexo: " ;
    if (document.getElementById("masculino").checked) {
      document.getElementById("sexo-final").innerText += " Masculino";
    } else if (document.getElementById("femenino").checked) {
      document.getElementById("sexo-final").innerText += " Femenino";
    } else if (document.getElementById("otro").checked) {
      document.getElementById("sexo-final").innerText += " Otro";
    }
    document.getElementById("intereses-final").innerText = "Intereses: ";
    if (document.getElementById("deportes").checked) {
      document.getElementById("intereses-final").innerText += "- Deportes";
    }
    if (document.getElementById("musica").checked) {
      document.getElementById("intereses-final").innerText += "- Música";
    }
    if (document.getElementById("juegos").checked) {
      document.getElementById("intereses-final").innerText += "- Juegos";
    }
    if (document.getElementById("tecnologia").checked) {
      document.getElementById("intereses-final").innerText += "- Tecnología";
    }
    document.getElementById("pais-final").innerText = "País: ";
    switch (document.getElementById("pais").value) {
      case "arg":
        document.getElementById("pais-final").innerText += " Argentina";
        break;
      case "bra":
        document.getElementById("pais-final").innerText += " Brasil";
        break;
      case "chi":
        document.getElementById("pais-final").innerText += " Chile";
        break;
      case "uru":
        document.getElementById("pais-final").innerText += " Uruguay";
        break;
    }
    document.getElementById("comentario-final").innerText = "Comentario: \n" + document.getElementById("comentario").value;
  };

  // When the user clicks on <span> (x), close the modal
  equis.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  ///////////////////////////////////////////////
  function esNombreValido() {
    if (nombre.value.length < 3) {
      return false;
    } else {
      return true;
    }
  }
  function esApellidoValido() {
    if (apellido.value.length < 3) {
      return false;
    } else {
      return true;
    }
  }
  function esEmailValido() {
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]/)) {
      return false;
    } else {
      return true;
    }
  }
  function esEdadValida() {
    const valorEdad = Number(edad.value);
    if (Number.isInteger(valorEdad)) {
      if (edad.value < 0 || edad.value > 100) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  botonEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    const esFormValido =
      esNombreValido() &&
      esApellidoValido() &&
      esEmailValido() &&
      esEdadValida();
    if (!esFormValido) {
      alert("Formulario invalido");
    } else {
      mostrarModal();
    }
  });
}
