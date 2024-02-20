// Cargamos libreria de testing
import { expect } from 'chai'

// cargamos libreria de supabase
import { supabase } from '../src/bd/supabase.js'

// Cargamos la clase Perfil
import { Proyectos } from '../src/bd/proyecto.js'

import { Perfil } from '../src/bd/perfil.js'

describe('getById()', function () {
  it('debería devolver la persona con el ID correspondiente', async function () {
    // Obtener el proyecto por ID
    const perfil = await Perfil.getById(1)
    // Esperamos que el nombre coincida
    expect(perfil.nombre).equal('Paco') // Mi primer id en perfiles se llama Paco
  })
})

describe('getById()', function () {
  it('debería devolver el proyecto con el ID correspondiente', async function () {
    // Obtener el proyecto por ID
    const proyecto = await Proyectos.getById(1)
    // Esperamos que el nombre coincida
    expect(proyecto.nombre).equal('Proyecto de Gestión de Inventario') // Esta está correcto
  })
})
