import{p as b}from"./datosPruebas-kok9c585.js";import{l as u}from"./main-3VjIazyQ.js";const v={template:`
  <div class="container">
  <h1 class="mt-5">Proyectos</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button 
            class="selectorFicha fichaProyectos nav-link w-100 active"
          >
            Todos los proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaMisProyectos" class="nav-item w-50">
          <button 
            class="selectorFicha fichaMisProyectos nav-link w-100"
          >
            Mis proyectos
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3">
      <!-- Boton para subir proyectos -->
        <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="vistaTabla btn btn-secondary me-2 bi bi-list">
        </button>
        <button class="vistaTarjetas btn btn-secondary me-2 bi bi-grid-3x3-gap ">
        </button>
        <!-- Buscador -->
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"
            ><i class="bi bi-search"></i
          ></span>
          <input
            id="inputBusqueda"
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><i id="borrarBuscador" class="bi bi-x"></i
          ></span>
        </div>
      </div>
    </div>
    
    <!-- Tabla de proyectos -->
    <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
      <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1000px"
      >
        <thead>
          <tr>
            <th></th>
            <th>
              Nombre <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Descripción <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Enlace <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>Repositorio</th>
            <th>
              Autor <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tbodyProyectos">
          <!-- Aqui van los datos generados por la lógica -->
          <p>No tienes proyectos</p>
        </tbody>
      </table>
    </div>

    <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
      <p>No tienes proyectos</p>
    </div>
  </div>
</div>
  `,script:()=>{const i=b;let n=!1;const o=u.getUsuario(),r=a=>{n&&(a=i.filter(t=>t.user_id===o.user_id));let s="";a.forEach(t=>{let e="";o.user_id===t.user_id&&(e=`
          <td><a
            data-id = ${t.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a></td>
          <td><a
            data-id = ${t.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a></td>
          `),s+=`
        <tr data-id="${t.id}" class="verDetalle">
          <td>
            <div class="containerImagen">
              <img 
                class="verDetalle"
                data-id="${t.id}"
                width="200px" 
                src=${t.imagen||"images/imagenVacia.png"} 
                alt="imagen proyecto" />
            </div>
          </td>
          <td>${t.nombre}</td>
          <td>${t.descripcion}</td>
          <td><a href="${t.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
          <td><a href="${t.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
          <td>${t.nombre_usuario} ${t.apellidos_usuario}</td>
          <td>${t.created_at}</td>
          <td>${t.estado}</td>
          <td>
            <!-- Botones de edición y borrado -->
            ${e}
          </td>
        </tr>   
        `}),document.querySelector("#tbodyProyectos").innerHTML=s},d=a=>{n&&(a=i.filter(t=>t.user_id===o.user_id));let s="";a.forEach(t=>{let e="";o.user_id===t.user_id&&(e=`
          <a
            data-id = ${t.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
          <a
            data-id = ${t.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
          `),s+=`
        <!-- tarjeta  -->
        <div class="col-12 col-lg-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-4 verDetalle"
                data-id="${t.id}"
                style="
                  background-image: url(${t.imagen||"images/imagenVacia.png"});
                  background-position: center;
                  background-size: cover;
                "
              ></div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">${t.nombre}</h5>
                  <p class="card-text">
                    ${t.descripcion}
                  </p>
                  <p class="small m-0 text-end text-italic">Autor: ${t.nombre_usuario} ${t.apellidos_usuario}</p>
                  <p class="small text-end text-italic">Fecha: ${t.created_at}</p>
                  <a class="btn btn-sm btn-outline-primary" href="${t.enlace}" target="_blank"><i class="bi bi-link"></i></a>
                  <a class="btn btn-sm btn-outline-primary" href="${t.repositorio}" target="_blank"><i class="bi bi-folder-symlink"></i></a>
                  <button class="btn btn-sm btn-success">${t.estado}</button>
                  <!-- Botones editar y borrar -->
                  ${e}
                </div>
              </div>
            </div>
          </div>
        </div>  
        `}),document.querySelector("#tabTarjetas").innerHTML=s};r(i),d(i),document.querySelector(".vistaTabla").addEventListener("click",a=>{a.target.classList.add("btn-success");const s=document.querySelector(".vistaTarjetas");s.classList.remove("btn-success"),s.classList.add("btn-secondary"),document.querySelector("#tabTabla").setAttribute("class","col-12 d-block"),document.querySelector("#tabTarjetas").setAttribute("class","d-none")}),document.querySelector(".vistaTarjetas").addEventListener("click",a=>{a.target.classList.add("btn-success");const s=document.querySelector(".vistaTabla");s.classList.remove("btn-success"),s.classList.add("btn-secondary"),document.querySelector("#tabTabla").setAttribute("class","d-none"),document.querySelector("#tabTarjetas").setAttribute("class","row")});const c=document.getElementById("inputBusqueda");c.addEventListener("input",()=>{const a=c.value.toLowerCase().trim(),s=i.filter(t=>{for(const e in t){const l=t[e];if(typeof l=="string"&&l.toLowerCase().includes(a))return!0}return!1});r(s),d(s)}),document.querySelector("#borrarBuscador").addEventListener("click",()=>{c.value="",r(i),d(i)}),document.querySelector(".nav-tabs").addEventListener("click",a=>{a.target.classList.contains("fichaMisProyectos")?(document.querySelector(".fichaMisProyectos").classList.add("active"),document.querySelector(".fichaProyectos").classList.remove("active"),n=!0):(document.querySelector(".fichaProyectos").classList.add("active"),document.querySelector(".fichaMisProyectos").classList.remove("active"),n=!1),r(i),d(i)}),document.querySelector("main").addEventListener("click",a=>{let s="";if(a.target.classList.contains("botonAdmin")){const t=a.target,e=t.dataset.id;t.classList.contains("botonEditar")?window.location=`#/proyectoEditar/${e}`:t.classList.contains("botonBorrar")&&alert("Borrar proyecto "+e)}a.target.tagName==="TD"&&(console.log("clic en td"),s=a.target.parentNode.dataset.id,window.location=`#/proyectoDetalle/${s}`),a.target.classList.contains("verDetalle")&&(s=a.target.dataset.id,window.location=`#/proyectoDetalle/${s}`)}),o.rol==="registrado"&&document.querySelector("#botonSubirProyecto").classList.add("disabled")}};export{v as default};
