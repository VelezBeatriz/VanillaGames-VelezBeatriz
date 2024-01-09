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

## Crear vite.config.js

Este archivo irá en raíz y contendrá lo siguiente:

```
import path from 'path' // Para gestionar directorios

export default {
  // Definimos la carpeta donde buscar cuando se carga la aplicación (donde estará el main.js)
  root: path.resolve(__dirname, 'src'),

  build: {
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080, */ // Podemos definir el puerto de salida
    hot: true
  }
}
```

## Instalación Bootstrap, Bootswatch y SASS

`npm i bootstrap bootswatch @popperjs/core`
o la versión separada
`npm install bootstrap`
`npm install bootswatch`
`npm install bootswatch`

## Seguidamente añadiremos SASS

Pero lo haremos como una dependencia instalada en desarrollo ya que en producción SASS no es necesario

`npm i sass -D`

Entonces crearemos una carpeta llamada SCSS dentro de src y añadiremos un archivo llamado `styles.scss`

Seguidamente en `vite.config.js` deberemos añadir las lineas de dichas librerias:

```
 resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  }
```

## Añadir Bootstrap en el scss

```
// Import all of Bootstrap's CSS
@import "~bootswatch/dist/yeti/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/yeti/bootswatch";
```

Y añadir los estilos en el main.js

```
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'
```
