//secondary-nav

function getSideMenu(element) {
  var nav = document.querySelector(".secondary-nav");
  var value = element.getAttribute("data-value");

  getNavElements(value);
  nav.classList.add("secondary-nav-left");
}

function hideSideMenu() {
  var nav = document.querySelector(".secondary-nav");
  nav.classList.remove("secondary-nav-left");
}

function getNavElements(value) {
  var links = document.querySelector(".secondary-links");
  links.innerHTML = "";

  switch (value) {
    case "1":
      links.innerHTML = `<li class="link2 p-3">Linea de tiempo de la historia de la Seguridad Activa</li>
             <li class="link2 p-3">Linea de tiempo de la historia de la Seguridad Pre Colision</li>
             <li class="link2 p-3">Linea de tiempo de la historia de la Seguridad Pasiva</li>
             `;
      break;
    case "2":
      links.innerHTML = `<li class="link2 p-3"><strong>Personas: </strong> Actividades de educación de seguridad vial</li>
        <li class="link2 p-3"><strong>Vehiculos: </strong> La busqueda por la seguridad del vehiculo</li>
        <li class="link2 p-3"><strong>Tráfico: </strong> La creación de un entorno de tráfico seguro</li>
        `;
      break;
    case "3":
      links.innerHTML = `<li class="link2 p-3">Experimentos de seguridad en colisiones</li>
              <li class="link2 p-3">Simulador de manejo</li>
              <li class="link2 p-3">Sitios de prueba del sistema de transporte inteligente</li>
              <li class="link2 p-3">THUMS</li>
              `;
      break;
    case "4":
      links.innerHTML = `<li class="link2 p-3">Tecnologias para entrenamiento</li>
                    <li class="link2 p-3">Seguridad Activa</li>
                    <li class="link2 p-3">Seguridad Pasiva</li>
                    `;
      break;
  }
}
