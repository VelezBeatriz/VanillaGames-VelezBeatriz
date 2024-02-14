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

// console.log('PRUEBAS SUPABASE')

const supabaseUrl = 'https://hndfwklbheorppxgouys.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZGZ3a2xiaGVvcnBweGdvdXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NjgyMzQsImV4cCI6MjAyMjQ0NDIzNH0.KSmZeBzCgadaRKW5SWHrjh_Nj6UvplQxV6WY_VKC2vA'
const supabase = createClient(supabaseUrl, supabaseKey)

// Probamos la api de las tablas
// función para Leer perfiles
const leerPerfiles = async () => {
  try {
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*')
    console.log('perfiles', perfiles)
  } catch (error) {
    console.log(error)
  }
}
// Ejecutamos la función
await leerPerfiles()

// Probamos a logearnos
const login = async () => {
  try {
    // USER LOGIN
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'velezsanchezbeatriz@fpllefia.com',
      password: 'aA123456789!'
    })
    console.log('login', data)
  } catch (error) {
    console.log(error)
  }
}

await login()
const getUser = async () => {
  try {
    // GET USER
    const { data: { user } } = await supabase.auth.getUser()
    console.log('Consultamos datos de usuario con getUser(): ', user)
  } catch (error) {
    console.log(error)
  }
}

await getUser()
// Probamos a cerrar sesión
const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    console.log('Sesión cerrada con exito: ')
  } catch (error) {
    console.log(error)
  }
}
// Cerramos sesión
await logout()
// Probamos a mostrar datos de usuario logueado. Debería darnos null
await getUser() // Es correcto
