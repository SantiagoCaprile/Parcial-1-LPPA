window.onload = function () {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const botonEnviar = document.getElementById("boton-enviar");
  const form = document.getElementById("formulario");
  const modal = document.getElementById("modal");
  const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  function mostrarModal(){
    modal.style.display = "block";
    document.getElementById("nombre-final").innerText = "Nombre: " + nombre.value;
    document.getElementById("apellido-final").innerText = "Apellido: " + apellido.value;
    document.getElementById("email-final").innerText = "Email: " + email.value;
    document.getElementById("edad-final").innerText = "Edad: " + edad.value + " años";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function validarNombre() {
    if (nombre.value.length < 3) {
      nombre.classList.add("error-field");
    } else {
      nombre.classList.remove("error-field");
    }
  }
  function validarApellido() {
    if (apellido.value.length < 3) {
      apellido.classList.add("error-field");
    } else {
      apellido.classList.remove("error-field");
    }
  }
  function validarEmail() {
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]/)) {
      email.classList.add("error-field");
    } else {
      email.classList.remove("error-field");
    }
  }
  function validarEdad() {
    const valorEdad = Number(edad.value);
    if (Number.isInteger(valorEdad)) {
      if (edad.value < 0 || edad.value > 100) {
        edad.classList.add("error-field");
      } else {
        edad.classList.remove("error-field");
      }
    } else {
      edad.classList.add("error-field");
    }
  }
  /* botonEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    validarNombre();
    validarApellido();
    validarEmail();
    validarEdad();
  });
  */

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
