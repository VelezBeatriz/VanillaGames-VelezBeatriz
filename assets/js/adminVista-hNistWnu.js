import{p as f,a as h}from"./datosPruebas-kok9c585.js";import{l as y}from"./main-3VjIazyQ.js";const b={template:`
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarImagenPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    id="imagenUsuario"
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(.images/avatar.svg);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="urlImagenUsuario"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button 
              id="botonActualizarImagen"
              type="button" 
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,script:(o,s,d)=>{console.log("modal editar imagen perfil cargado:",o),document.querySelector("#urlImagenUsuario").value=o;const i=document.querySelector("#imagenUsuario");i.style.backgroundImage=`url(${o})`,document.querySelector("#urlImagenUsuario").addEventListener("input",()=>{o=document.querySelector("#urlImagenUsuario").value,i.style.backgroundImage=`url(${o})`}),document.querySelector("#botonActualizarImagen").addEventListener("click",()=>{document.querySelector(`#${s}`).value=o,console.log("Actualizando base de datos: "+d),$.script()})}},$={template:`
  <div class="container">
  <h1 class="mt-5">Panel de administración</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button 
            class="selectorFicha fichaProyectos nav-link w-100"
          >
            Proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaUsuarios" class="nav-item w-50">
          <button 
            class="selectorFicha fichaUsuarios nav-link w-100 active"
          >
            Usuarios
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      
      <div class="d-flex col-12 col-sm-8 mb-3">
        
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
    <div id="tabUsuarios" class="col-12" style="overflow-x: auto">
    ...
    </div>
    
    </div>
    <div id="tabProyectos" class="col-12 d-none" style="overflow-x: auto">
    ...
    </div>

  </div>
</div>
 ${b.template} 
  `,script:()=>{const o=y.getUsuario(),s=f,d=h;let i=!0;document.querySelector(".nav-tabs").addEventListener("click",a=>{a.target.classList.contains("fichaUsuarios")?(document.querySelector(".fichaUsuarios").classList.add("active"),document.querySelector(".fichaProyectos").classList.remove("active"),i=!0,console.log("tabusuarios"),document.querySelector("#tabUsuarios").classList.add("d-block"),document.querySelector("#tabUsuarios").classList.remove("d-none"),document.querySelector("#tabProyectos").classList.add("d-none")):(document.querySelector(".fichaProyectos").classList.add("active"),document.querySelector(".fichaUsuarios").classList.remove("active"),i=!1,console.log("tabProyectos"),document.querySelector("#tabProyectos").classList.add("d-block"),document.querySelector("#tabProyectos").classList.remove("d-none"),document.querySelector("#tabUsuarios").classList.add("d-none")),l(s),c(d)});const l=a=>{let e=`
      <!-- Tabla de proyectos -->
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
        <tbody>
      `;a.forEach(t=>{const r=`
                <td><a
                  data-id = ${t.id}
                  class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                ></a></td>
                <td><a
                  data-id = ${t.id}
                  class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                ></a></td>
                `;e+=`
        <tr>
          <td>
            <div class="containerImagen">
              <img 
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
            ${r}
          </td>
        </tr>   
        `}),e+=`
        </tbody>
      </table>
      `,document.querySelector("#tabProyectos").innerHTML=e},c=a=>{let e=`
      <!-- tabla usuarios-->
      <form id="formAdminUsuarios" action="" class="form" novalidate>
        <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1200px"
        >
        <thead>
          <tr>
            <th></th>
            <th>
              URL imagen <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Email <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Nombre <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Apellidos <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Rol <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        `;a.forEach(t=>{e+=`
            <tr>
                <td>
                  <div class="containerImagen">
                    <div
                      class="rounded-circle d-flex align-items-end justify-content-end"
                      style="
                        background-image: url(${t.avatar});
                        width: 50px;
                        height: 50px;
                        background-size: cover;
                        background-position: center;
                      "
                    >
                      <i
                        data-id = "${t.user_id}" 
                        data-urlavatar="${t.avatar}" 
                        data-urlinputavatar = "urlImagen_${t.user_id}"
                        class="btn btn-success btn-sm rounded-circle bi bi-pencil botonEditarImagen"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditarImagenPerfil"></i
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <!-- URL imagen -->
                  <input
                    id="urlImagen_${t.user_id}"
                    type="url"
                    class="form-control form-control-sm"
                    value="${t.avatar}"
                  />
                  <div class="invalid-feedback">
                    La url no es válida
                  </div>
                </td>
                <td>
                  <!-- email -->
                  <input
                    required
                    id="email_${t.user_id}"
                    type="email"
                    class="form-control form-control-sm"
                    value="${t.email}"
                  />
                  <div class="invalid-feedback">
                    Formato incorrecto
                  </div>
                </td>
                <td>
                  <input
                    required
                    id="nombreUsuario_${t.user_id}"
                    type="text"
                    class="form-control form-control-sm"
                    value="${t.nombre}"
                  />
                  <div class="invalid-feedback">
                    Nombre requerido
                  </div>
                </td>
                <td>
                  <input
                    id="apellidosUsuario_${t.user_id}"
                    type="text"
                    class="form-control form-control-sm"
                    value="${t.apellidos}"
                  />
                </td>

                <td>
                  <input
                    id="fecha_${t.user_id}"
                    type="date"
                    class="form-control form-control-sm"
                    value="${t.created_at}"
                  />
                  <div class="invalid-feedback">
                    Formato incorrecto
                  </div>
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="rol_${t.user_id}">
                    <option value="${t.rol}">${t.rol}</option>
                    <option value="registrado">registrado</option>
                    <option value="desarrollador">desarrollador</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="estado_${t.user_id}">
                    <option value="${t.estado}">${t.estado}</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </td>
                <td>
                  <button data-id="${t.user_id}" class="btn btn-sm btn-outline-danger bi bi-trash3 botonEliminar"></button>
                </td>
                <td>
                  <button data-id="${t.user_id}" type="submit" class="btn btn-sm btn-success botonActualizar">
                    Actualizar
                  </button>
                </td>
            </tr>
        `}),e+="</tbody></table></form>",document.querySelector("#tabUsuarios").innerHTML=e};l(s),c(d);const u=document.getElementById("inputBusqueda");u.addEventListener("input",()=>{const a=u.value.toLowerCase().trim();let e=[];i?e=d:e=s;const t=e.filter(r=>{for(const g in r){const m=r[g];if(typeof m=="string"&&m.toLowerCase().includes(a))return!0}return!1});i?c(t):l(t)}),document.querySelector("#borrarBuscador").addEventListener("click",()=>{document.getElementById("inputBusqueda").value="",l(s),c(d)}),document.querySelector("main").addEventListener("click",a=>{if(a.target.classList.contains("botonAdmin")){const e=a.target,t=e.dataset.id;e.classList.contains("botonEditar")&&(console.log("Editar proyecto "+t),window.location=`#/proyectoEditar/${t}`),e.classList.contains("botonBorrar")&&console.log("Borrar proyecto "+t)}});const n=document.querySelector("#formAdminUsuarios");n.addEventListener("click",a=>{if(a.preventDefault(),a.stopPropagation(),a.target.classList.contains("botonActualizar")&&n.checkValidity()){const e=a.target.dataset.id;p(e)}else n.classList.add("was-validated");if(a.target.classList.contains("botonEliminar")){a.target.parentNode.parentNode.classList.add("d-none");const t=a.target.dataset.id;v(t)}if(a.target.classList.contains("botonEditarImagen")){const e=a.target.dataset.urlavatar,t=a.target.dataset.urlinputavatar,r=a.target.dataset.id;b.script(e,t,r)}}),n.addEventListener("change",a=>{n.checkValidity()||(console.log("No valida"),n.classList.add("was-validated"))});function p(a){const e={imagen:document.querySelector("#urlImagen_"+a).value,nombre:document.querySelector("#nombreUsuario_"+a).value,apellidos:document.querySelector("#apellidosUsuario_"+a).value,estado:document.querySelector("#estado_"+a).value,email:document.querySelector("#email_"+a).value};alert(`Enviando a la base de datos el objeto con id = ${o.user_id}`),console.log(`Enviando a la base de datos el objeto con id = ${o.user_id}`,e)}function v(a){alert("Borrando usuario "+a)}}};export{$ as default};
