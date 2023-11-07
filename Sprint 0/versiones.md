# Documentación Sprint 0

## Fases de desarrollo.

Necesitamos organizarnos un poco. Vamos a planificar como vamos a llevar a cabo las diferentes fases para cumplir con nuestros objetivos:

1. **Definición del proyecto y requisitos básicos:** En primer lugar debemos tener muy claro qué se espera de nuestra aplicación, por lo que anotaremos cada funcionalidad teniendo en cuanta los diferentes actores (roles de acceso).
   _Esto es lo hemos hecho en el apartado anterior._
2. **Definición de las versiones:**
   Una vez conocemos los requisitos del proyecto, dividiremos el trabajo en diferentes versiones, de manera que todas ellas serán operativas, aunque cada una ampliando las funcionalidades.
3. **Planificación del proyecto:**
   Basandonos en la metodología Agile devidiremos todo el proceso en diferentes historias/tareas (para cada una de las versiones definidas) que: agruparemos, temporizaremos y representaremos mediante diagramas.
4. **Diseño de la interficie:**
   Basandonos en el diseño centrado en el usuario (DCU):

- Realizaremos un Benchmarking (para copiarnos de la competencia)
- Crearemos un modelo de usuarios
- Diseñaremos los prototipos de bajo nivel(bocetos, wireframes)
- Diseñaremos el mockup (prototipo de alto nivel) junto a la guía de estilos (usaremos la aplicación Figma)
- Haremos pruebas de usabilidad y rediseñaremos los prototipos.

5. **Programación del frontend (html/css/js):** Maquetaremos los prototipos (html/css) y diseñaremos la lógica de validación de cliente
6. **Programación del backend:**
   Utilizaremos un backend como servicio (SUPABASE) para:

- Crear las bases de datos
- Diseñar consultas sql y funciones postgres
- Programaremos un ORM en javascript para el mapping de la bd.

7. **Integración de frontend y backend en la aplicación:**

- Programaremos la SPA a partir de los prototipos
- Programaremos la lógica de acceso a la bd empleando el ORM
- Programaremos el resto de funcionalidades (sesiones y roles de acceso, etc)

8. **Analisis usabilidad II:**
   Haremos pruebas de usabilidad (test de usuarios) y solucionaremos los posibles conflictos detectados.
9. **Testing y despliegue en producción:**

- Diseñaremos un sistema de testing para crear tests unitarios
- Configuraremos un entorno DevOps para trabajar con Integración continua y despliegue continuo (CI/CD)
- Desplegaremos en producción cada una de las versiones.

## Versiones

Vamos a dividir el desarrollo del proyecto en diferentes versiones a partir de las funcionalidades que podrá realizar:

- **VERSIÓN 1.0:** Implementación de la publicación de proyectos
- **VERSIÓN 2.0:** Implementación de los comentarios de los proyectos
- **VERSIÓN 3.0:** Implementación del sistema de valoración mediante estrellas
- **VERSIÓN 4.0:** Implementación del sistema de valoración basado en rúbricas o criterios de valoración.
