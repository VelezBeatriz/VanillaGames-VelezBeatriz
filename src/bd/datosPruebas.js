// INSERT INTO proyectos (user_id, nombre, descripcion, imagen, enlace, repositorio, estado)
// VALUES
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Gestión de Inventario', 'Este proyecto permite gestionar el inventario de una empresa', 'https://imagen.com/gestion-inventario.jpg', 'https://enlace.com/gestion-inventario', 'https://github.com/proyecto-gestion-inventario', 'Activo'),
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Gestión de Personal', 'Este proyecto permite gestionar el personal de una empresa', 'https://imagen.com/gestion-personal.jpg', 'https://enlace.com/gestion-personal', 'https://github.com/proyecto-gestion-personal', 'Inactivo'),
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Análisis de Datos de Ventas', 'Este proyecto permite analizar los datos de ventas de una empresa', 'https://imagen.com/analisis-ventas.jpg', 'https://enlace.com/analisis-ventas', 'https://github.com/proyecto-analisis-ventas', 'Activo'),
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Análisis de Redes Sociales', 'Este proyecto permite analizar las redes sociales de una empresa', 'https://imagen.com/analisis-redes-sociales.jpg', 'https://enlace.com/analisis-redes-sociales', 'https://github.com/proyecto-analisis-redes-sociales', 'Activo'),
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Gestión de Proyectos', 'Este proyecto permite gestionar proyectos de una empresa', 'https://imagen.com/gestion-proyectos.jpg', 'https://enlace.com/gestion-proyectos', 'https://github.com/proyecto-gestion-proyectos', 'Inactivo'),
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Visualización de Datos', 'Este proyecto permite visualizar datos de una empresa', 'https://imagen.com/visualizacion-datos.jpg', 'https://enlace.com/visualizacion-datos', 'https://github.com/proyecto-visualizacion-datos', 'Activo'),
//   ('ec37a315-1fb2-41e7-bad1-3f8188a37bb2', 'Proyecto de Análisis de Datos de Marketing', 'Este proyecto permite analizar los datos de marketing de una empresa', 'https://imagen.com/analisis-marketing.jpg', 'https://enlace.com/analisis-marketing', 'https://github.com/proyecto-analisis-marketing', 'Inactivo');

export const perfiles = [
  {
    id: 1,
    created_at: '2023-08-28',
    user_id: '8e9b7c4f-10de-4a10-a36e-87f49657d1c1',
    nombre: 'Paco',
    apellidos: 'Martínez Soria',
    avatar: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/28/16460502314689.jpg',
    estado: 'Activo',
    rol: 'registrado',
    email: 'paco@example.com',
    contraseña: '123456'
  },
  {
    id: 2,
    created_at: '2023-08-29',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Carmen',
    apellidos: 'Maura',
    avatar: 'https://s.libertaddigital.com/2020/09/15/1920/1080/fit/carmen-maura-roman.jpg',
    estado: 'Inactivo',
    rol: 'desarrollador',
    email: 'carmen@example.com',
    contraseña: '123456'
  },
  {
    id: 3,
    created_at: '2023-08-30',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Antonio',
    apellidos: 'Resines',
    avatar: 'https://estaticos-cdn.elperiodico.com/clip/056573ce-f784-49d0-9746-0e154380598b_alta-libre-aspect-ratio_default_0.jpg',
    estado: 'Activo',
    rol: 'desarrollador',
    email: 'antonio@example.com',
    contraseña: '123456'
  },
  {
    id: 4,
    created_at: '2023-08-31',
    user_id: 'd67e3b1c-875f-437f-bd2a-9ff50b72083d',
    nombre: 'Maribel',
    apellidos: 'Verdú',
    avatar: 'https://es.web.img3.acsta.net/pictures/23/06/13/09/44/5805084.jpg',
    estado: 'Inactivo',
    rol: 'desarrollador',
    email: 'maribel@example.com',
    contraseña: '123456'
  },
  {
    id: 5,
    created_at: '2023-09-01',
    user_id: '2419d5e3-46a6-45d6-98a2-b02c8ac5d3fe',
    nombre: 'Javier',
    apellidos: 'Bardem',
    avatar: '',
    estado: 'Activo',
    rol: 'admin',
    email: 'javier@example.com',
    contraseña: '123456'
  }
]

// Datos de prueba con proyectos inventados a partir de los usuarios (perfiles) anteriores
export const proyectos = [
  {
    id: 1,
    created_at: '2023-08-29T10:00:00Z',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Salto Espacial',
    descripcion: 'Juego de plataforma espacial con saltos emocionantes',
    imagen: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    enlace: 'https://salto-espacial.com',
    repositorio: 'https://github.com/usuario/salto-espacial',
    estado: 'En desarrollo',
    nombre_usuario: 'Carmen',
    apellidos_usuario: 'Maura'
  },
  {
    id: 2,
    created_at: '2023-08-28T15:30:00Z',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Carrera Loca',
    descripcion: 'Juego de carreras con obstáculos y power-ups',
    imagen: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    enlace: 'https://carrera-loca.com',
    repositorio: 'https://github.com/usuario/carrera-loca',
    estado: 'En desarrollo',
    nombre_usuario: 'Antonio',
    apellidos_usuario: 'Resines'
  },
  {
    id: 3,
    created_at: '2023-08-27T09:45:00Z',
    user_id: 'd67e3b1c-875f-437f-bd2a-9ff50b72083d',
    nombre: 'Aventuras en la Selva',
    descripcion: 'Explora la selva en busca de tesoros y desafíos',
    imagen: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    enlace: 'https://aventuras-en-la-selva.com',
    repositorio: 'https://github.com/usuario/aventuras-en-la-selva',
    estado: 'En desarrollo',
    nombre_usuario: 'Maribel',
    apellidos_usuario: 'Verdú'
  },
  {
    id: 4,
    created_at: '2023-08-26T11:20:00Z',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Rompecabezas Divertido',
    descripcion: 'Resuelve rompecabezas desafiantes con imágenes divertidas',
    imagen: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    enlace: 'https://rompecabezas-divertido.com',
    repositorio: 'https://github.com/usuario/rompecabezas-divertido',
    estado: 'En desarrollo',
    nombre_usuario: 'CArmen',
    apellidos_usuario: 'Maura'
  },
  {
    id: 5,
    created_at: '2023-08-25T14:15:00Z',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Defensor Espacial',
    descripcion: 'Protege la galaxia de invasores alienígenas en este juego arcade',
    imagen: 'https://images.unsplash.com/photo-1575364289437-fb1479d52732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    enlace: 'https://defensor-espacial.com',
    repositorio: 'https://github.com/usuario/defensor-espacial',
    estado: 'En desarrollo',
    nombre_usuario: 'Antonio',
    apellidos_usuario: 'Resines'
  }
]
