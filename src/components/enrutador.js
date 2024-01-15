export const enrutador = {
  rutas: {
    home: import('@views/homeVista.js'),
    // Usuarios
    adminUsuarios: import('@views/adminUsuarios.js'),
    adminProyectos: import('@views/adminVista.js'),
    registro: import('@views/registroVista.js'),
    login: import('@views/loginVista.js'),
    // Proyectos
    proyectos: import('@views/proyectosVista.js'),
    proyectoNuevo: import('@views/proyectoNuevoVista.js'),
    proyectoEditar: import('@views/proyectoEditarVista.js'),
    proyectoDetalle: import('@views/proyectoDetalleVista.js'),
    404: import('@views/404.js')
  },
  observadorRutas: () => {
    // Capturamos los eventos click sobre el body
    document.querySelector('body').addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('Soy', link, ' y soy un elemento de clase router-link')
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        // Actualizamos url del navegador
        window.history.pushState({ path: href }, '', href)
        // console.log('Devuelvo: ', window.history.pushState({ path: href }, '', href))
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })
    // Capturamos eventos pushState (cambios en la url del navegador)
    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('Evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  },
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // console.log(pathCompleto)
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]
    console.log('Soy el PATH: ', path)
    console.log('Soy el PATH_COMPLETO: ', pathCompleto)

    // Capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componente = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componente) {
    // Obtenemos el objeto del componente (que fué exportado como default)
      const vista = await componente.default
      // inyectamos vista y ejecutamos su script
      document.querySelector('main').innerHTML = vista.template
      // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
      // vista.script(parametro) --> A dia de hoy no se pasa ningún parámetro por tanto deshabilitamos este script.
    } else {
    // Si la vista no existe cargamos la página de error
      window.location = '#/404'
    }
  }
}
