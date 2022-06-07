window.onload = function () {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");

  nombre.onblur = function () {
    if (nombre.value.length < 3) {
      nombre.classList.add("error-field");
    } else {
      nombre.classList.remove("error-field");
    }
  };
  nombre.onfocus = function () {
    nombre.classList.remove("error-field");
  }
  apellido.onblur = function () {
    if (apellido.value.length < 3) {
      apellido.classList.add("error-field");
    } else {
      apellido.classList.remove("error-field");
    }
  };
  apellido.onfocus = function () {
    apellido.classList.remove("error-field");
  }
};
