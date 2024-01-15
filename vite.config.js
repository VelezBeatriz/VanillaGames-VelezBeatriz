import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'), // Carpeta donde alojamos el archivo main.js
  base: './', // Es importante indicar la base de los archivos
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
      '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  build: {
    emptyOutDir: true, // Esto vaciará el directorio de salida antes de construir
    rollupOptions: {
      /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
      input: {
        main: path.resolve(__dirname, 'src/index.html') // Indicamos las páginas que debe analizar
      },
      output: {
        dir: path.resolve(__dirname, 'dist'), // Donde se va a crear el build de nuestra aplicación
        format: 'es', // Formato de ES modules
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: true // ( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)

  },
  publicDir: 'assets',
  server: {
    /* port: 8080, */ // Podemos definir el puerto de salida
    hot: true
  }
}
