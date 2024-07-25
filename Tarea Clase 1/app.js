let div = document.getElementById("div1");
let boton = document.getElementById("boton1");

boton.addEventListener("click", bienvenido);
boton.addEventListener("click", adios);

function colores() {
  div.innerHTML = "Texto agregado desde mi archivo app.js";
  div.style.margin = "30px";
  div.style.background = "olive";
  div.style.fontFamily = "console";
  div.style.fontSize = "50px";
}

function bienvenido() {
  alert("hola, bienvenido a esta pagina");
}

function adios() {
  alert("adios");
}
