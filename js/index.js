
let navbar = document.querySelector("nav");

// Selecciona el botón de la barra de navegación que cierra el menú
const navbarToggler = document.querySelector('.navbar-toggler');

// Selecciona todos los elementos de la lista de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Agrega un controlador de eventos de clic a cada elemento de la lista de navegación
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Espera 1 segundo antes de colapsar la barra de navegación
    setTimeout(() => {
      navbarToggler.click();
    }, 250);
  });
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(20, 20, 20, 0.8)";
    navbar.style.transition = "background-color 0.5s ease-in-out";
    
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.transition = "none";
  }
});


