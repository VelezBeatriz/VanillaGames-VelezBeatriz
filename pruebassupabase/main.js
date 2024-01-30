import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Supabase!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// ***********************

console.log('hola supabase')


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tmpzslorvmdkpxolisxn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcHpzbG9ydm1ka3B4b2xpc3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2Mzk0MTcsImV4cCI6MjAyMjIxNTQxN30.Ct8kulWNWmEv9qXr3hY_VeqC-VittYfoo0E0_x3lUyw'
const supabase = createClient(supabaseUrl, supabaseKey)

// Consulta a tabla


const  leerPruebaia = async () =>{
  try{
    
    let { data: pruebaia, error } = await supabase
      .from('pruebaia')
      .select('*')
      console.log(pruebaia)

      
    }

    catch(error){
      console.log(error)
    }
}

let { data, error } = await supabase.auth.signInWithPassword({
  email: 'usuario',
  password: 'contraseña'
})

const { data: { user }} = await supabase.auth.getUser()
console.log('Usuario', user)


let { error_logout } = await supabase.auth.signOut()
const { data: { usuario }} = await supabase.auth.getUser()

console.log('Usuario LogOut', usuario)

const datos = await leerPruebaia()

console.log('conexion', supabase)
console.log('datos', datos)

