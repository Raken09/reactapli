import axios from 'axios';

const apiUsuarios = axios.create({
    //baseURL: 'https://proyectodjango-la3t.onrender.com/appUsers/api',
    baseURL: 'http://localhost:8000/appUsers/api/',
})

export const obtenerUsuariosRegulaes = () => apiUsuarios.get(`/usuarioregular`) // Se hace una peticion get a la ruta usuarioregular
export const obtenerUsuariosAdmin = () => apiUsuarios.get(`/usuarioadmin`) // Se hace una peticion get a la ruta usuarioadmin

export const getTask = (id) => apiUsuarios.get(`/${id}/`) // Se hace una petición GET a la ruta /tasks/:id

export const createTask = (task) => apiUsuarios.post(`/`, task) // Se hace una petición POST a la ruta /tasks
export const enviarUsuario = (usuario) => apiUsuarios.post(`/`, usuario) // Se hace una petición POST a la ruta /tasks

export const deleteTask = (id) => apiUsuarios.delete(`/${id}`) // Se hace una petición DELETE a la ruta /tasks/:id

export const updateTask = (id, task) => apiUsuarios.put(`/${id}/`, task) // Se hace una petición PUT a la ruta /tasks/:id

