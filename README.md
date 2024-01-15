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

```js
import { header } from "./componentes/header";
import { footer } from "./componentes/footer";

// Importamos la vista por defecto (que será home)
async function cargarVista() {
  const componente = await import("./vistas/homeVista");
  const vista = componente.default;
  // Inyectamos la vista home
  document.querySelector("main").innerHTML = vista.template;
}
cargarVista();

//Inyectamos el componente header
document.querySelector("header").innerHTML = header.template;

//Inyectamos el componente footer
document.querySelector("footer").innerHTML = footer.template;
```

## Crear vite.config.js

Este archivo irá en raíz y contendrá lo siguiente:

```js
import path from "path"; // Para gestionar directorios

export default {
  // Definimos la carpeta donde buscar cuando se carga la aplicación (donde estará el main.js)
  root: path.resolve(__dirname, "src"),

  build: {
    rollupOptions: {
      /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
      input: {
        main: path.resolve(__dirname, "src/index.html"), // Indicamos las páginas que debe analizar
      },
      output: {
        dir: path.resolve(__dirname, "dist"), //Donde se va a crear el build de nuestra aplicacion
        format: "es", //Formato de ES modules
      },
    },
    outDir: path.resolve(__dirname, "dist"),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
  },
  server: {
    /*port: 8080, */ // Podemos definir el puerto de salida
    hot: true,
  },
};
```

## Instalación Bootstrap, Bootswatch y SASS

`npm i bootstrap bootswatch @popperjs/core`
o la versión separada
`npm install bootstrap`
`npm install bootswatch`
`npm install bootswatch`
`npm i bootstrap-icons`

## Seguidamente añadiremos SASS

Pero lo haremos como una dependencia instalada en desarrollo ya que en producción SASS no es necesario

`npm i sass -D`

Entonces crearemos una carpeta llamada SCSS dentro de src y añadiremos un archivo llamado `styles.scss`

Seguidamente en `vite.config.js` deberemos añadir las lineas de dichas librerias:

```js
 resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  }
```

## Añadir Bootstrap en el scss

```js
// Import all of Bootstrap's CSS
$bootstrap-icons-font-dir: "../node_modules/bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
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

## Alias

Recuerda que puedes añadir `alias` para simplificar el tema de exportar componentes. Puedes ver un ejemplo en:

```js
  alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
      //Ejemplo
      '@components': path.resolve(__dirname, 'src/components')
    }
```

## npm run build

Para realizar el npm run build, debemos añadir en `export default`, la indicación:

```js
base: "./";
```

y sobre todo tampoco olvidarnos reescribir la carpeta dist editando estos datos en el `vite.config.js`:

```js
build: {
    emptyOutDir: true, // Esto vaciará el directorio de salida antes de construir
    ...
}
```

## Instalador ESLINT

- Inicializamos el terminal y añadimos _npm install standard -D_
- Creamos un _.gitignore_ para evitar subir la carpeta _node_modules_
- Posteriormente añadiremos en el _package.json_ el siguiente código:

```
"eslintConfig": {
   "extends": [
     "./node_modules/standard/eslintrc.json"
   ]
 }
```

- Instalamos la extensión **ESLint**-Visual Studio Code

## 3.Configuración del settings.json

- **Crtl + Shift + P** y selecciono open user settings (JSON)
- Añadiremos el código correspondiente que puedes encontrar en la siguiente [url](https://www.cesarguerra.mx/activar-autocorrecion-autoformato-de-eslint-al-guardar-un-archivo-en-vs-code/)

## Despliegue continuo GitHub Pages

Para ello usaremos el paquete [`gh-pages`](https://www.npmjs.com/package/gh-pages) para ello usaremos el comando:

```
npm i gh-pages -D
```

Añadiremos el `script` en el `package.json`:

```json
"deploy": "gh-pages -d NombreCarpetaDeSalida"
```

Seguidamente haremos un `npm run build` e iremos a comprobar que la página se publicó en la rama correspondiente

## Añadir imagenes

Desde la ruta `assets/images` y `publicDir: 'assets',` en `vite.config.js`

## Para que en assets incluya el css y el js haremos lo siguiente:

En [`vite.config.js`](https://stackoverflow.com/questions/71180561/vite-change-ouput-directory-of-assets)

```js
 assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        2️⃣
        chunkFileNames: 'assets/js/[name]-[hash].js',
        3️⃣
        entryFileNames: 'assets/js/[name]-[hash].js',
```

### Crear la lógica de las vistas

Añade el código a las vistas:

```js
export default {
  // html
  template: `
  ...
  `,
  script: () => {
    console.log("vista registro cargada");
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector("#formRegistro");
    // Detectamos su evento submit (enviar)
    formulario.addEventListener("submit", (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault();
      event.stopPropagation();
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      }
    });
  },
};
```

### Realiza un pull request

Haz un pull request desde SPA a Main

### Descargar la extensión 'Git Graph'

Para acabar, vamos a utilizar una extensión de VSCode que nos permite visualizar la evolución de nuestro repositorio de forma gráfica.
