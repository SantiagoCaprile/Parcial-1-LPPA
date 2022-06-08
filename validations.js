window.onload = function () {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const sexo = document.getElementById("sexo");
  const intereses = document.getElementById("intereses");
  const pais = document.getElementById("pais");
  const botonEnviar = document.getElementById("boton-enviar");
  const modal = document.getElementById("modal");
  const equis = document.getElementsByClassName("close")[0];
  const todosLosFieldsets = document.getElementsByTagName("fieldset");
  const todosLosInputs = document.getElementsByTagName("input");

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
  equis.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  ///////////////////////////////////////////////
  function mostrarErrores(campo, error){
    if(campo.parentElement.lastElementChild.classList.contains("error")){
      campo.parentElement.lastElementChild.innerText = error;
    } else {
      campo.parentElement.appendChild(document.createElement("p"));
      campo.parentElement.lastElementChild.innerText = error;
      campo.parentElement.lastElementChild.classList.add("error");
    }
  }
  function limpiarErrores(fieldSet){
    if(fieldSet.lastElementChild.classList.contains("error")){
      fieldSet.lastElementChild.remove();
    }
  }
  function limpiarTodosLosErrores(){
    for(let i = 0; i < todosLosFieldsets.length; i++){
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
  //("" && "") == ""
  //las 4 funciones devuelven strings, por lo que si no hay errores, devuelve ""
  //falta modificar el p de error para que si hay errores, muestre los de la función

  function erroresSexo() {
    let error = "";
    if (!document.getElementById("masculino").checked &&
    !document.getElementById("femenino").checked && 
    !document.getElementById("otro").checked) {
      error += "Debe seleccionar una opcion.\n";
    }
    return error;
  }
  function erroresIntereses() {
    let error = "";
    if (!document.getElementById("deportes").checked &&
    !document.getElementById("musica").checked && 
    !document.getElementById("juegos").checked && 
    !document.getElementById("tecnologia").checked) {
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
}