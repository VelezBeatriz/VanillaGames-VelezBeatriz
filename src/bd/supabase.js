import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hndfwklbheorppxgouys.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZGZ3a2xiaGVvcnBweGdvdXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NjgyMzQsImV4cCI6MjAyMjQ0NDIzNH0.KSmZeBzCgadaRKW5SWHrjh_Nj6UvplQxV6WY_VKC2vA'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }

// Mostramos por consola la conexión establecida
console.log('conexión', supabase)
