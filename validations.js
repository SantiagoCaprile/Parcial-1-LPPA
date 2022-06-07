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
  email.onblur = function () {
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]/)) {
      email.classList.add("error-field");
    } else {
      email.classList.remove("error-field");
    }
  };
  email.onfocus = function () {
    email.classList.remove("error-field");
  }
  edad.onblur = function () {
    const valorEdad = Number(edad.value);
    if (Number.isInteger(valorEdad)){
      if (edad.value < 0 || edad.value > 100) {
        edad.classList.add("error-field");
      } else {
        edad.classList.remove("error-field");
      }
    } else {
      edad.classList.add("error-field");
    }
  };
  edad.onfocus = function () {
    edad.classList.remove("error-field");
  }
};
