const botonExpandir = document.querySelector('.boton-expandir');
const menuDerecho = document.querySelector('.rightcontentnavbar');

botonExpandir.addEventListener('click', () => {
  menuDerecho.classList.toggle('show');
});