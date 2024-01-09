# COMANDOS - SPRINT 3

## Crear proyecto vite

`npm create vite .`

## Instalar npm

`npm install`

## Comprobar si funciona utilizando el comando

`npm run dev`

## Modificamos en Scaffolding

```
node_modules
        src
            componentes
                header.js
                footer.js
            vistas
                homeVista.js
            index.html
            main.js
        .gitignore
        package.json
        package-lock.json
```

## Crear el html

Crearemos el html del index.html, el header, el footer y la vista de home.

Seguidamente en el main añadiremos:

```
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/homeVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
}
cargarVista()

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template
```
