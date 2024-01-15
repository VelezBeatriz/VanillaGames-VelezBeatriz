export default {
  template: // html
      `
      <div class="container-fluid">
      <h1 class="mt-5">Panel de administración</h1>
      <!-- tabs -->
      <div class="row mt-5">
        <div class="col-12">
          <ul class="nav nav-tabs">
            <li class="nav-item w-50">
              <a class="nav-link active" aria-current="page" href="#"
                >Usuarios</a
              >
            </li>
            <li class="nav-item w-50">
              <a class="nav-link" href="#">Proyectos</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- tabla proyectos -->
      <div class="border border-top-0 p-3">
        <!-- buscador -->
        <div class="row">
          <div class="d-flex col-12 col-md-6 mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"
                ><i class="bi bi-search"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <span class="input-group-text" id="addon-wrapping"
                ><i class="bi bi-x"></i
              ></span>
            </div>
          </div>
        </div>

        <!-- tabla usuarios-->
        <div class="col-12" style="overflow-x: auto">
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

            <tr>
              <form novalidate action="">
                <td>
                  <div class="containerImagen">
                    <div
                      class="rounded-circle d-flex align-items-end justify-content-end"
                      style="
                        background-image: url(.images/avatar.svg);
                        width: 50px;
                        height: 50px;
                        background-size: cover;
                        background-position: center;
                      "
                    >
                      <i
                        class="btn btn-success btn-sm rounded-circle bi bi-pencil"
                      ></i>
                    </div>
                  </div>
                </td>
                <td>
                  <!-- URL imagen -->
                  <input
                    type="url"
                    class="form-control form-control-sm"
                    value="http://imagen.com"
                  />
                </td>
                <td>
                  <!-- email -->
                  <input
                    required
                    type="email"
                    class="form-control form-control-sm"
                    value="email@email.com"
                  />
                  <div class="invalid-feedback">
                    El formato del email no es correcto
                  </div>
                </td>
                <td>
                  <input
                    required
                    type="text"
                    class="form-control form-control-sm"
                    value="Nombre usuario"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    value="Apellidos usuario"
                  />
                </td>

                <td>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    value="12/12/2023 proyecto"
                  />
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="">
                    <option value="1">opción</option>
                    <option value="2">opción2</option>
                  </select>
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="">
                    <option value="1">opción</option>
                    <option value="2">opción2</option>
                  </select>
                </td>
                <td>
                  <button type="submit" class="btn btn-sm btn-success">
                    Actualizar
                  </button>
                </td>
                <td>
                  <i class="btn btn-sm btn-outline-danger bi bi-trash3"></i>
                </td>
              </form>
            </tr>

            <tr>
              <form novalidate action="">
                <td>
                  <div class="containerImagen">
                    <div
                      class="rounded-circle d-flex align-items-end justify-content-end"
                      style="
                        background-image: url(.images/avatar.svg);
                        width: 50px;
                        height: 50px;
                        background-size: cover;
                        background-position: center;
                      "
                    >
                      <i
                        class="btn btn-success btn-sm rounded-circle bi bi-pencil"
                      ></i>
                    </div>
                  </div>
                </td>
                <td>
                  <!-- URL imagen -->
                  <input
                    type="url"
                    class="form-control form-control-sm"
                    value="http://imagen.com"
                  />
                </td>
                <td>
                  <!-- email -->
                  <input
                    required
                    type="email"
                    class="form-control form-control-sm"
                    value="email@email.com"
                  />
                </td>
                <div class="invalid-feedback">
                  El formato del email no es correcto
                </div>
                <td>
                  <input
                    required
                    type="text"
                    class="form-control form-control-sm"
                    value="Nombre usuario"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    value="Apellidos usuario"
                  />
                </td>

                <td>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    value="12/12/2023 proyecto"
                  />
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="">
                    <option value="1">opción</option>
                    <option value="2">opción2</option>
                  </select>
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="">
                    <option value="1">opción</option>
                    <option value="2">opción2</option>
                  </select>
                </td>
                <td>
                  <button type="submit" class="btn btn-sm btn-success">
                    Actualizar
                  </button>
                </td>
                <td>
                  <i class="btn btn-sm btn-outline-danger bi bi-trash3"></i>
                </td>
              </form>
            </tr>

            <tr>
              <form novalidate action="">
                <td>
                  <div class="containerImagen">
                    <div
                      class="rounded-circle d-flex align-items-end justify-content-end"
                      style="
                        background-image: url(.images/avatar.svg);
                        width: 50px;
                        height: 50px;
                        background-size: cover;
                        background-position: center;
                      "
                    >
                      <i
                        class="btn btn-success btn-sm rounded-circle bi bi-pencil"
                      ></i>
                    </div>
                  </div>
                </td>
                <td>
                  <!-- URL imagen -->
                  <input
                    type="url"
                    class="form-control form-control-sm"
                    value="http://imagen.com"
                  />
                </td>
                <td>
                  <!-- email -->
                  <input
                    required
                    type="email"
                    class="form-control form-control-sm"
                    value="email@email.com"
                  />
                  <div class="invalid-feedback">
                    El formato del email no es correcto
                  </div>
                </td>
                <td>
                  <input
                    required
                    type="text"
                    class="form-control form-control-sm"
                    value="Nombre usuario"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    value="Apellidos usuario"
                  />
                </td>

                <td>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    value="12/12/2023 proyecto"
                  />
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="">
                    <option value="1">opción</option>
                    <option value="2">opción2</option>
                  </select>
                </td>
                <td>
                  <select class="form-control form-control-sm" name="" id="">
                    <option value="1">opción</option>
                    <option value="2">opción2</option>
                  </select>
                </td>
                <td>
                  <button type="submit" class="btn btn-sm btn-success">
                    Actualizar
                  </button>
                </td>
                <td>
                  <i class="btn btn-sm btn-outline-danger bi bi-trash3"></i>
                </td>
              </form>
            </tr>
          </table>
        </div>
      </div>
    </div>
      `,
  script: () => {
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('form')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Detenemos el evento enviar (submit)
        event.preventDefault()
        event.stopPropagation()
      }
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
    })
  }
}
