import{p as i}from"./datosPruebas-kok9c585.js";const d={template:`
  <div class="container">
  <h1 class="mt-5">Edición de proyecto</h1>
  <div class="d-flex justify-content-end">
    <button id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left router-link">
      Volver</button
    >
  </div>
  <form novalidate id="formularioEditarProyecto" action="" class="form">
    <div class="row mt-2">
      <div class="col-12 col-md-4 pt-2 mb-3">
        <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid" />
        <label class="form-label mt-2" for="urlImagen"
          ><strong>URL imagen: </strong></label
        >
        <input
          id="urlImagen"
          type="text"
          class="form-control"
          value="http://enlaceImagen.com"
        />
        <div class="invalid-feedback">
          No es una url correcta
        </div>
      </div>
      <div class="col-12 col-md-8">
        <!-- Formulario nuevo proyecto -->

        <!-- Nombre proyecto -->
        <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
        <input
          required
          id="nombreJuego"
          type="text"
          value="Nombre Autor"
          class="form-control"
        />
        <div class="invalid-feedback">
          Debe tener un nombre de proyecto
        </div>

        <!-- Descripción -->
        <label class="form-label mt-2" for="descripcion"
          ><strong>Descripción: </strong></label
        >
        <textarea id="descripcion" class="form-control" rows="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
        >

        <!-- Estado -->
        <label class="form-label mt-2" for="estado"
          ><strong>Estado: </strong></label
        >
        <select required id="estado" class="form-control">
          <option value="Cerrado">Cerrado</option>  
          <option value="En desarrollo">En desarrollo</option>
        </select>
        <div class="invalid-feedback">
          Debes definir un estado
        </div>

        <!-- Fecha -->
        <label class="form-label mt-2" for="fecha"
          ><strong>Fecha: </strong></label
        >
        <input id="fecha" type="date" class="form-control"  />
        <div class="invalid-feedback">
          El formato no es correcto
        </div>

        <!-- Enlace al proyecto -->
        <label class="form-label mt-2" for="enlace"
          ><strong>Enlace: </strong></label
        >
        <input
          id="enlace"
          type="url"
          class="form-control"
          value="http://enlace.com"
        />
        <div class="invalid-feedback">
          No es una url correcta
        </div>

        <!-- Repositorio -->
        <label class="form-label mt-2" for="repositorio"
          ><strong>Repositorio: </strong></label
        >
        <input
          id="repositorio"
          type="text"
          class="form-control"
          value="user.github.com/123456"
        />

        <!-- Submit -->
        <input
          id="subirProyecto"
          type="submit"
          class="btn btn-success mt-3"
          value="Actualizar proyecto"
        />
      </div>
    </div>
  </form>
</div>
  `,script:l=>{const e=i.filter(o=>o.id==l)[0],r=e.created_at.split("T")[0];document.querySelector("#imagenJuego").setAttribute("src",e.imagen),document.querySelector("#urlImagen").value=e.imagen,document.querySelector("#nombreJuego").value=e.nombre,document.querySelector("#descripcion").value=e.descripcion,document.querySelector("#estado").value=e.estado,document.querySelector("#fecha").value=r,console.log(r),document.querySelector("#enlace").value=e.enlace,document.querySelector("#repositorio").value=e.repositorio,document.querySelector("#botonVolver").addEventListener("click",()=>{window.history.back()});const a=document.querySelector("#urlImagen");a.addEventListener("input",()=>{document.querySelector("#imagenJuego").setAttribute("src",a.value)});const t=document.querySelector("#formularioEditarProyecto");t.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),t.checkValidity()?c():t.classList.add("was-validated")});function c(){const o={imagen:document.querySelector("#urlImagen").value,nombre:document.querySelector("#nombreJuego").value,descripcion:document.querySelector("#descripcion").value,estado:document.querySelector("#estado").value,enlace:document.querySelector("#enlace").value,repositorio:document.querySelector("#repositorio").value};alert(`Enviando a la base de datos el objeto con id = ${e.id}`),console.log(`Enviando a la base de datos el objeto con id = ${e.id}`,o)}}};export{d as default};
