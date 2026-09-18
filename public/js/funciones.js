   $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    indicators: true, // Muestra los puntos indicadores abajo
    height: 400,      // Altura base (en fullscreen toma 100vh automáticamente)
    duration: 500,    // Duración de la transición en milisegundos
    interval: 6000    // Tiempo de espera entre cada diapositiva
  });
});
