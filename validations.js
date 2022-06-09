window.onload = function () {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const sexo = document.getElementById("sexo");
  const intereses = document.getElementById("intereses");
  const pais = document.getElementById("pais");
  const comentario = document.getElementById("comentario");
  const botonEnviar = document.getElementById("boton-enviar");
  const modal = document.getElementById("modal");
  const modalHeader = document.getElementsByClassName("modal-body")[0];
  const equis = document.getElementsByClassName("close")[0];
  const todosLosFieldsets = document.getElementsByTagName("fieldset");

  function mostrarModal() {
    modal.style.display = "block";
    var frase = "Su nombre es " + nombre.value + " " + apellido.value + ".";
    var frase2 = "Vive en ";
    switch (document.getElementById("pais").value) {
      case "arg":
        frase2 += " Argentina,";
        break;
      case "bra":
        frase2 += " Brasil,";
        break;
      case "chi":
        frase2 += " Chile,";
        break;
      case "uru":
        frase2 += " Uruguay,";
        break;
    }
    frase2 += " tiene " + edad.value + " años y se identifica con el sexo ";
    if (document.getElementById("masculino").checked) {
      frase2 += " Masculino.";
    } else if (document.getElementById("femenino").checked) {
      frase2 += " Femenino.";
    } else if (document.getElementById("otro").checked) {
      frase2 += " Otro.";
    }
    var frase3 = "Se interesa por: ";
    if (document.getElementById("deportes").checked) {
      frase3 += "->Deportes";
    }
    if (document.getElementById("musica").checked) {
      frase3 += "->Música";
    }
    if (document.getElementById("juegos").checked) {
      frase3 += "->Juegos";
    }
    if (document.getElementById("tecnologia").checked) {
      frase3 += "->Tecnología";
    }
    var frase4 = "A partir de ahora recibira todas las novedades en: ";
    frase4 += document.getElementById("email").value;
    if (comentario.value != "") {
      var frase5 = "Ademas aclara que: " + comentario.value;
    }
    console.log(frase);
    modalHeader.appendChild(document.createElement("p")).innerHTML = frase;
    modalHeader.appendChild(document.createElement("p")).innerHTML = frase2;
    modalHeader.appendChild(document.createElement("p")).innerHTML = frase3;
    modalHeader.appendChild(document.createElement("p")).innerHTML = frase4;
    modalHeader.appendChild(document.createElement("p")).innerHTML = frase5;
  }
  equis.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  function mostrarErrores(campo, error) {
    if (campo.parentElement.lastElementChild.classList.contains("error")) {
      campo.parentElement.lastElementChild.innerText = error;
    } else {
      campo.parentElement.appendChild(document.createElement("p"));
      campo.parentElement.lastElementChild.innerText = error;
      campo.parentElement.lastElementChild.classList.add("error");
    }
  }
  function limpiarErrores(fieldSet) {
    if (fieldSet.lastElementChild.classList.contains("error")) {
      fieldSet.lastElementChild.remove();
    }
  }
  function limpiarTodosLosErrores() {
    for (let i = 0; i < todosLosFieldsets.length; i++) {
      limpiarErrores(todosLosFieldsets[i]);
    }
  }
  function erroresNombre() {
    let error = "";
    if (nombre.value == "") {
      error += "El nombre no puede estar vacío.\n";
    }
    if (nombre.value.length < 3) {
      error += "El nombre debe tener al menos 3 caracteres.\n";
    }
    return error;
  }
  function erroresApellido() {
    let error = "";
    if (apellido.value == "") {
      error += "El apellido no puede estar vacío.\n";
    }
    if (apellido.value.length < 3) {
      error += "El apellido debe tener al menos 3 caracteres.\n";
    }
    return error;
  }
  function erroresEmail() {
    let error = "";
    if (email.value == "") {
      error = "El email no puede estar vacío.\n";
    }
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]/)) {
      error = "El email no es válido.\n";
    }
    return error;
  }
  function erroresEdad() {
    let error = "";
    if (edad.value == "") {
      error += "La edad no puede estar vacía.\n";
    }
    const valorEdad = Number(edad.value);
    if (Number.isInteger(valorEdad)) {
      if (edad.value < 0 || edad.value > 100) {
        return "La edad debe estar entre 0 y 100 años.\n";
      }
    } else {
      error += "La edad debe ser un número entero.\n";
    }
    return error;
  }
  function erroresSexo() {
    let error = "";
    if (
      !document.getElementById("masculino").checked &&
      !document.getElementById("femenino").checked &&
      !document.getElementById("otro").checked
    ) {
      error += "Debe seleccionar una opcion.\n";
    }
    return error;
  }
  function erroresIntereses() {
    let error = "";
    if (
      !document.getElementById("deportes").checked &&
      !document.getElementById("musica").checked &&
      !document.getElementById("juegos").checked &&
      !document.getElementById("tecnologia").checked
    ) {
      error += "Debe seleccionar al menos una opcion.\n";
    }
    return error;
  }
  function erroresPais() {
    let error = "";
    if (document.getElementById("pais").value == "") {
      error += "Debe seleccionar un pais.\n";
    }
    return error;
  }
  botonEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    limpiarTodosLosErrores();
    const esFormValido =
      erroresNombre() +
      erroresApellido() +
      erroresEmail() +
      erroresEdad() +
      erroresSexo() +
      erroresIntereses() +
      erroresPais();
    if (!esFormValido) {
      mostrarModal();
    } else {
      mostrarErrores(nombre, erroresNombre());
      mostrarErrores(apellido, erroresApellido());
      mostrarErrores(email, erroresEmail());
      mostrarErrores(edad, erroresEdad());
      mostrarErrores(sexo.firstChild, erroresSexo());
      mostrarErrores(intereses.firstChild, erroresIntereses());
      mostrarErrores(pais, erroresPais());
    }
  });
};
