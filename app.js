const productos = {

  "UX-001": {
    nombre: "UrbanX Shadow Runner",
    precio: "$50.00",
    modelo: "assets/producto.glb"
  },

  "UX-002": {
    nombre: "UrbanX Street One",
    precio: "$79.90",
    modelo: "assets/producto2.glb"
  },

  "UX-003": {
    nombre: "UrbanX Night Force",
    precio: "$99.90",
    modelo: "assets/producto3.glb"
  }

};


// ==============================
// OBTENER PRODUCTO DE LA URL
// ==============================

const parametros = new URLSearchParams(window.location.search);

const codigo =
  parametros.get("producto") || "UX-001";

const producto =
  productos[codigo] || productos["UX-001"];


// ==============================
// ELEMENTOS
// ==============================

const modelo3d =
  document.getElementById("modelo3d");

const nombreProducto =
  document.getElementById("nombreProducto");

const codigoProducto =
  document.getElementById("codigoProducto");

const precioProducto =
  document.getElementById("precioProducto");

const girarBtn =
  document.getElementById("girarBtn");

const reiniciarBtn =
  document.getElementById("reiniciarBtn");


// ==============================
// CARGAR PRODUCTO
// ==============================

nombreProducto.textContent =
  producto.nombre;

codigoProducto.textContent =
  "Código: " + codigo;

precioProducto.textContent =
  producto.precio;

modelo3d.src =
  producto.modelo;


// ==============================
// CONTROL DEL MODELO
// ==============================

let girando = true;


girarBtn.addEventListener("click", () => {

  girando = !girando;

  if (girando) {

    modelo3d.setAttribute(
      "auto-rotate",
      ""
    );

    girarBtn.textContent =
      "Pausar giro";

  } else {

    modelo3d.removeAttribute(
      "auto-rotate"
    );

    girarBtn.textContent =
      "Activar giro";

  }

});


// ==============================
// RESTABLECER VISTA
// ==============================

reiniciarBtn.addEventListener(
  "click",
  () => {

    modelo3d.cameraOrbit =
      "0deg 75deg 105%";

    modelo3d.fieldOfView =
      "30deg";

  }
);