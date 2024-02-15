import{a}from"./datosPruebas-kok9c585.js";import{l as n,h as c}from"./main-3VjIazyQ.js";const u={template:`
  <div class="container">
  <h1 class="mt-5 text-center">Inicia sesión</h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <!-- Formulario de inicio de sesión (login) -->
    <form id="formularioLogin" novalidate action="" class="form border shadow-sm p-3">
      <!-- Email -->
      <label for="emailLogin" class="form-label">Email:</label>
      <input id="emailLogin" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
      <div class="invalid-feedback">El formato del email no es correcto</div>
      <!-- Contraseña -->
      <label for="passLogin" class="form-label mt-3">Contraseña:</label>
      <input value="123456" id="passLogin" name="password" required minlength="6" type="password" class="form-control" />
      <div class="invalid-feedback">
        La contraseña debe tener como mínimo 6 caracteres
      </div>

      <!-- Recordar contraseña -->
      <div class="form-check mt-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          Recordar sesión
        </label>
      </div>

      <!-- Link a recordar contraseña -->
      <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>

      <!-- Botón Iniciar sesión -->
      <input
        type="submit"
        class="btn btn-primary w-100 mt-3"
        value="Iniciar sesión"
      />
    </form>

    <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
      >¿Eres nuevo? Regístrate</a
    >
  </div>
</div>
  `,script:()=>{console.log("vista login cargada");const s=document.querySelector("#formularioLogin");s.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),s.checkValidity()?l(s):s.classList.add("was-validated")});function l(o){const r=o.email.value,t=o.password.value,e=a.findIndex(i=>i.email===r);if(e>0)if(a[e].contraseña===t){console.log("¡login correcto!");const i={nombre:a[e].nombre,apellidos:a[e].apellidos,email:a[e].email,rol:a[e].rol,avatar:a[e].avatar,user_id:a[e].user_id};n.setUsuario(i),window.location="#/proyectos",c.script()}else console.log("La contraseña no corresponde"),alert("la contraseña no es correcta");else console.log("El usuario no existe"),alert("El usuario no existe")}}};export{u as default};
