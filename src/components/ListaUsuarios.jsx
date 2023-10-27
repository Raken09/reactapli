import { useEffect, useState } from "react";
import { obtenerUsuariosRegulaes } from '../api/apiUsuarios';
import { TablaUsuarios } from './TablaUsuarios/';
export function ListaUsuarios() { 

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function cargarUsuarios() {
            const res = await obtenerUsuariosRegulaes();
            setUsuarios(res.data);
            console.log(res.data);
        }
        cargarUsuarios();
    }, []);

    return <div>
        {usuarios.map(usuario => (
            <TablaUsuarios key={usuario.id} usuario ={usuario}/>
        ))}
    </div>;
}