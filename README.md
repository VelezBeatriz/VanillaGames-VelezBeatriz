# Documentación

## Escenario del proyecto

**Vanilla Games S.L.** es una empresa de desarrollo de **minijuegos para navegadores web**, creados con vanillaJS, es decir, desarrollados exclusivamente con **Javascript** como lenguaje de programación (sin frameworks)

En esta empresa trabajan 10 desarrolladores y, habitualmente, suelen tener a tres alumnos/as en prácticas, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en proponer a cada uno de los miembros del equipo el desarrollo de un minijuego que, al acabar, deberán compartir con el resto de sus compañeros. Estos, a su vez, deben comentar y valorar cada una de las propuestas. Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial, para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de google. Actualmente **pretenden crear una aplicación web tipo intranet** para llevar a cabo este propósito.

Como alumno en prácticas, **tu trabajo consiste en crear una aplicación web** que permitirá a los desarrolladores de Vanilla Games, publicar sus propuestas de minijuegos, de manera que el resto de compañeros podrá hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

## Requisitos del proyecto y casos de uso general

Los **casos de uso** son una técnica de modelado utilizada en el desarrollo de software para describir las interacciones entre un sistema y sus usuarios. En términos simples, los casos de uso describen cómo los usuarios interactúan con un sistema y qué resultados esperan obtener de él.

### Casos de uso general

Esta aplicación web debe permitir a un usuario **registrarse** (con su nombre, apellidos, email y contraseña) y posteriormente **iniciar** y **cerrar** sesión. Un usuario registrado debe poder **ver un listado de proyectos** publicados por los desarrolladores. También podrá **editar su perfil** y **subir una imagen** de tipo avatar.

Si el usuario registrado tiene el perfil de **‘desarrollador’** , además, debe poder **publicar proyectos** con información del tipo: nombre de proyecto, una descripción, una imagen representativa y dos enlaces, el del proyecto desplegado en un servidor de pruebas y el del repositorio del código correspondiente, el estado del proyecto, etc. También debe poder **eliminar o editar sus proyectos**.

Por otro lado, el perfil desarrollador debería poder **realizar comentarios** de cada uno de los proyectos publicados y añadir una valoración en forma de estrellas.

Finalmente, habrá un administrador que podrá **adminstrar el perfil** de cada uno de los usuarios registrados en la plataforma (editar, borrar, etc) así como modificar el rol de cada uno de estos. También tendrá **control total sobre los comentarios y valoraciones.**

## Requesitos y diagrama de casos de uso

En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

**Por lo tanto, vamos a comenzar por la versión 1.0.**

Lo primero es definir los **casos de uso para esta versión.** Una primera aproximación podría ser la siguiente:

### Casos de uso para la V1.0 - Definición básica

1. **Registrar usuario**: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
2. **Recuperar contraseña**: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
3. **Iniciar sesión**: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
4. **Cerrar sesión**: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
5. **Editar perfil**: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
6. **Ver proyectos**: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
7. **Publicar proyecto**: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
8. **Editar proyecto**: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
9. **Eliminar proyecto**: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
10. **Ver/Editar usuarios**: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
11. **Eliminar usuario**: Un administrador puede eliminar cualquier usuario registrado en la plataforma.

### Diagrama de casos de uso

Para tener la información de manera gráfica vamos a utilizar uno de los **diagramas UML** que aprendimos a hacer el curso pasado:

#### Diagrama de casos de uso para la versión 1.0

![Alt Diagrama de casos de uso](img/diagramaCasosUso-V1.0.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo **lo que debe hacer la versión 1.0**, nuestra misión ahora es **planificar el trabajo** que se nos viene encima...

## Casos de uso específicos y diagramas de flujo.

En el primer apartado **'Requisitos y diagrama de casos de uso'** para esta **versión 1.0**, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un **diagrama de casos de uso.**

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

### Casos de uso específicos

#### 1. Registrar usuario

**Actores:** Usuario no registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

- El usuario navega a la página de registro.
- El usuario introduce su nombre, apellidos, email y contraseña.
- El sistema valida que los campos estén completos y que el email no esté registrado previamente.
- El sistema crea un nuevo usuario con los datos proporcionados.
- El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

**Flujos alternativos:**

- 3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

#### 2. Recuperar contraseña

**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

- El usuario navega a la página de registro.
- El usuario selecciona la opción 'Recuperar contraseña'
- El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
- El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.

**Flujos alternativos:**

- 3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.

### 3. Iniciar sesión

**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

- El usuario navega a la página de inicio de sesión.
- El usuario introduce su email y contraseña.
- El sistema valida las credenciales y crea una sesión para el usuario.
- El sistema redirige al usuario a la página principal de la aplicación.

**Flujos alternativos:**

- 3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

### 4. Cerrar sesión

**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

- El usuario hace clic en el botón de "cerrar sesión".
- El sistema cierra la sesión del usuario.
- El sistema redirige al usuario a la página de inicio.

### 4. Ver/Editar perfil

**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

- El usuario navega a la página de edición de perfil.
- El usuario edita su nombre, apellidos y contraseña.
- El sistema valida los campos y actualiza el perfil del usuario.
- El sistema muestra un mensaje de confirmación.

**Flujos alternativos:**

- 3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

### 5. Ver proyectos

**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

- El usuario navega a la página de proyectos.
- El sistema muestra una lista de proyectos publicados por desarrolladores.
- El usuario puede hacer clic en un proyecto para ver más detalles.
- El usuario puede mostrar/filtrar los proyectos a partir de un buscador

### 6. Publicar proyecto

**Actores:** Usuario registrado con perfil de desarrollador.

**Precondiciones:** El usuario ha iniciado sesión y su perfil es de desarrollador.

**Flujo básico:**

- El usuario navega a la página de publicación de proyecto.
- El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
- El sistema valida los campos y crea un nuevo proyecto.
- El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

**Flujos alternativos:**

- 2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
  El sistema descarta la información ingresada en el formulario.
  El sistema muestra un mensaje de confirmación al desarrollador.

### 7. Editar proyecto:

**Actor principal:** Desarrollador

**Objetivo:** Editar la información de un proyecto previamente creado.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

- El usuario selecciona la opción de "Editar proyecto".
- El sistema muestra la lista de proyectos previamente creados por el usuario.
- El usuario selecciona el proyecto que desea editar.
- El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
- El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
- El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
- El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

### 8. Eliminar proyecto:

**Actor principal:** Desarrollador

**Objetivo:** Eliminar un proyecto previamente creado.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

- El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
- El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
- El usuario confirma que desea eliminar el proyecto.
- El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
- El sistema actualiza la información de proyectos.

### 9. Ver/Editar usuario:

**Actor principal:** Usuario administrador

**Objetivo:** Editar la información de los usuarios registrados.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

**Flujo principal:**

- El usuario selecciona la opción de "Ver usuarios".
- El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
- El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
- El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
- El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

### 10. Eliminar usuario:

**Actor principal:** Usuario administrador

**Objetivo:** Eliminar usuario del sistema.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

**Flujo principal:**

- El usuario selecciona la opción de "Ver usuarios".
- El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
- El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
- El sistema informa de que se eliminarán todos sus registros.
- El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

## Errores

Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

- **Error de conexión:** El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. **El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos** y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

- **Error de validación:** Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, **el sistema debería mostrar un mensaje de error indicando el problema específico**, como "El campo de correo electrónico debe ser una dirección de correo válida".

- **Error de autenticación:** Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, **el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada** y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

- **Error de autorización:** Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, **el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada** y ofrecer la posibilidad de volver a la página anterior.

- **Error de servidor:** En caso de que se produzca un error interno en el servidor, como una excepción no controlada, **el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error** y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

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

## Deseño de Bocetos

### Home y menús usuarios

![Alt Home y menús usuarios](img/homeMenuUsers.jpg)

Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).

- En el **header** vamos a alojar una barra superior fija con: el **logo** y nombre de la web (que hará las veces de link a la página principal), un **menú central genérico** (para acceder a páginas públicas), un menú central específico (que será diferente en función del rol de usuario logueado), y un icono (**avatar**) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el **menú de usuario** (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).
- El **cuerpo (main)** albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.
- El **header** será meramente informativo.

### Regitro de un usuario

![Alt Regitro de un usuario](img/RegisterUser.jpg)

### Iniciar sesión

![Alt Iniciar sesión](img/LoginUser.jpg)

### Editar mi perfil

![Alt Editar mi perfil](img/EditUser.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, **añadir una imagen de avatar**. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan **subirse archivos** (imágenes) al servidor.

### Listado de todos los proyectos

![Alt Listado de todos los proyectos](img/ListProjects.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

### Listado de Mis proyectos

![Alt Listado de Mis proyectos](img/ListMyProjects.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

_Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior._

### Detalle de un proyecto

![Alt Detalle de un proyecto](img/DetailsProjects.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

### Nuevo proyecto / Editar un proyecto

![Alt Nuevo proyecto / Editar un proyecto](img/NewEditProject.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto _ENVIAR_, pero si estamos editándolo aparecerá el texto ACTUALIZAR. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

### Panel administración de proyectos

![Alt Regitro de un usuario](img/AdministrationPanel.jpg)

Si tienes el rol '**administrador**' aparecerá el item '_Panel administración_' en el **menú superior específico**. Este item nos permite cargar la vista '**Panel administración de proyectos**'. Desde esta vista también podemos acceder al 'Panel administración de usuarios'.

Esta vista permite **editar o borrar cualquier proyecto** haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista '_Editar proyecto_'

### Panel administración de usuarios

![Alt Regitro de un usuario](img/AdministrationUser.jpg)

Esta vista permite **editar los datos de los usuarios.** Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos **aparecen sobre 'inputs'**, de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el '_estado_' y el '_rol_' del usuario) excepto el email.


## Test de usuarios inicial
### Primer Test de Usabilidad
Tal y como hemos comentado en el apartado 'Diseño centrado en el usuario', una de las premisas de esta metodología consiste en realizar evaluaciones constantes para detectar los posibles problemas de usabilidad cuanto antes mejor. Por lo que una buena idea es realizar un primer test de usabilidad.

Por el momento os adelanto que la técnica más utilizada par evaluar la usabilidad son los '**tests de usuario**'.

Estos consisten en crear una bateria de acciones que el usuario debe realizar, para detectar si existe algún problema en la interación con la aplicación. A continuación vamos pidiendo a un usuario focal (una persona que esté dentro del target de usuarios a quien va dirigida la app) que realice cada tarea, mostrandole los bocetos que aparecerán en cada interacción. Por ejemplo, si hace clic sobre el item de menú 'login' le mostraremos el boceto de la página 'login'.

Para este primer test hemos preparado las siguientes acciones:

- Suponiendo que eres un **usuario no registrado**:
    - Accede a la información general 'A cerca de' de esta web.
    - Regístrate.
    - Logueate.
    - Modifica tu perfil añadiendo una imagen de avatar.
    - Busca un proyecto llamado 'Tetris'.
    - Accede al detalle de este proyecto.
    - Cierra sesión.
- Suponiendo que eres un usuario con rol '**Desarrollador**':
    - Crea un proyecto nuevo.
    - Accede a la lista de tus proyectos.
    - Muestra el detalle de tu nuevo proyecto.
    - Edita tu proyecto cambiando la descripción.
    - Borra tu proyecto.

- Suponiendo que eres un usuario con rol '**Administrador**':
    - Muestra la lista de proyectos.
    - Borra un proyecto.
    - Modifica el nombre de un proyecto.
    - Muestra la listra de todos los usuarios registrados.
    - Canvia el rol de uno de ellos.
    - Modifica la imagen de su avatar.

### Conclusiones y modificaciones
De este primer test de usuario se desprenden las siguientes conclusiones:

- La vista de proyectos en forma de **tabla no es muy atractiva.**
- El usuario ha tenido **dificultades a la hora de intentar modificar la imagen avatar** de un usuario.

Para mejorar estos pequeños problemas de usabilidad vamos a tomar las siguientes acciones:

- En la vista de proyectos vamos crear un par de botones para poder alternar entre ver los proyectos en forma de **tabla** o en forma de **tarjetas**.
- En la vista de administración de usuarios, añadir un pequeño icono (un **lápiz**) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.

Estos serían los bocetos actualizados:

#### Vista de proyectos
*Poner la imagen del los nuevos bocetos*

#### Vista del Panel de administraición de usuarios.
*Poner la imagen del los nuevos bocetos*

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: **El diseño de los wireframes.**