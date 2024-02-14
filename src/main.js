// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/style.scss'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from '@components/enrutador'

// Import our components
import { header } from '@components/header'
import { footer } from '@components/footer'
import proyectosVista from './vistas/proyectosVista'
import loginVista from './vistas/loginVista'

import { createClient } from '@supabase/supabase-js'

// Importamos la vista por defecto (que será home)
// async function cargarVista () {
//   const componente = await import('./vistas/homeVista')
//   const vista = componente.default
//   // Inyectamos la vista home
//   document.querySelector('main').innerHTML = vista.template
//   // Ejecutamos la lógica de la vista
//   vista.script()
// }
// cargarVista()

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template
enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'
