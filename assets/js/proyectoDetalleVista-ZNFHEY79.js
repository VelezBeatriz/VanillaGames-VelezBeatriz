import{p as i}from"./datosPruebas-kok9c585.js";const d={template:`
  <div class="container">
  <h1 class="mt-5">Detalle del proyecto</h1>
  <div class="d-flex justify-content-end">
    <button id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
      Volver</button>
  </div>
  
  <div class="row mt-2">
    <div class="col-12 col-md-4 mb-3">
      <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid">
    </div>
    <div class="col-12 col-md-8">
      <p>
        <p><strong>Nombre: </strong><span id="nombreJuego">TETRIS</span></p>
        <p><strong>Descripción: </strong><span id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
        <p><strong>Estado: </strong><span id="estado">Estado</span></p>
        <p><strong>Fecha: </strong><span id="fecha">12/12/2023</span></p>
        <p><strong>Enlace: </strong><span id="enlace">http://www.enlaceapp.com</span></p>
        <p><strong>Repositorio: </strong><span id="repositorio">carrebola.github.com/123456</span></p>
      </p>
    </div>
  </div>
  <div
    class="container fixed-bottom d-flex justify-content-end"
    style="padding: 0px 0px 100px 0px"
  >
    <button
      id="botonEditarDetalle"
      data-id=""
      class="btn btn-success rounded-circle fs-3 shadow bi bi-pencil router-link"
      style="width: 50px"
    >
     
    </button>
  </div>
  
</div>
  `,script:o=>{console.log("Vista proyectoDetalle cargada"),console.log(i,o);const e=i.filter(t=>t.id==o)[0],n=e.created_at.split("T")[0];document.querySelector("#imagenJuego").setAttribute("src",e.imagen),document.querySelector("#nombreJuego").innerHTML=e.nombre,document.querySelector("#descripcion").innerHTML=e.descripcion,document.querySelector("#estado").innerHTML=e.estado,document.querySelector("#fecha").innerHTML=n,document.querySelector("#enlace").innerHTML=e.enlace,document.querySelector("#repositorio").innerHTML=e.repositorio,document.querySelector("#botonEditarDetalle").setAttribute("data-id",e.id),document.querySelector("#botonVolver").addEventListener("click",()=>{window.history.back()}),document.querySelector("#botonEditarDetalle").addEventListener("click",t=>{const s=t.target.dataset.id;window.location=`#/proyectoEditar/${s}`})}};export{d as default};
