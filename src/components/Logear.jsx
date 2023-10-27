import { obtenerUsuariosRegulaes, obtenerUsuariosAdmin } from '../api/apiUsuarios';
//import { BrowserRouter as Router, Switch,} from 'react-router-dom';
//import { Redirect } from 'react-router';
import { useNavigate } from 'react-router-dom';
export async function Logear (usuario, contraseña) {
    const navigate = useNavigate();
    const usuariosRegulares = await obtenerUsuariosRegulaes();
    const usuariosAdmin = await obtenerUsuariosAdmin();
    const usuarios = usuariosRegulares.data.concat(usuariosAdmin.data);
    //console.log(usuarios.length);

    let tipoUser = '';

    for (let i = 0; i < usuarios.length; i++) {
        if (usuario === usuarios[i].username && contraseña === usuarios[i].password) {
            console.log('Usuario encontrado');
            tipoUser = usuarios[i].username;
            break;
        } else {
            console.log('Usuario no encontrado');
        }
    }
    
    if (tipoUser === 'admin') {
        return (
            navigate('/admin')
        );
    } else if (tipoUser !== '' && tipoUser !== 'admin') {
        return (
            navigate('/usuario-regular')
        );
    } else
        console.log('Usuario no encontrado');
        return (
            // Puedes mostrar un mensaje de error o cualquier otro contenido aquí
            <div>Usuario no encontrado</div>
        );
}