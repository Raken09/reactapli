import '../styles/login.css'
//import { useState } from 'react';
import { Button, Form, Input } from 'antd';
//import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { obtenerUsuariosRegulaes, obtenerUsuariosAdmin } from '../api/apiUsuarios';
//import { Logear } from '../components/logear'

const usuariosRegulares = await obtenerUsuariosRegulaes();
const usuariosAdmin = await obtenerUsuariosAdmin();
const usuarios = usuariosRegulares.data.concat(usuariosAdmin.data);
console.log(usuarios.length);
let tipoUser = '';
  // Llama a la función para obtener y mostrar los usuarios

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
}; 

export function PaginaLogin() {
    const navigate = useNavigate(); 
    
    const onFinish = async (values) => {
    
        console.log('Success:', values);
        const usuario = values.usuario;
        const contraseña = values.contraseña;
    
        //Logear(usuario, contraseña);
    
        for (let i = 0; i < usuarios.length; i++) {
            if (usuario === usuarios[i].username && contraseña === usuarios[i].password) {
                console.log('Usuario encontrado');
                tipoUser = usuarios[i].username;
                if (tipoUser === 'admin') {
                    navigate('/admin')
                } else
                    navigate('/usuario-regular')
                break;
            } else {
                console.log('Usuario no encontrado');
            }
        }

        /*if (tipoUser === 'admin') {
            navigate('/admin')
        } else if (tipoUser !== '' && tipoUser !== 'admin') {
            navigate('/usuario-regular')
        } else
            //console.log('Usuario no encontrado');
        // Puedes mostrar un mensaje de error o cualquier otro contenido aquí
            <div>Usuario no encontrado</div>*/
    
    };
    
    const { register, handleSubmit } = useForm(); 

    const onSubmit = handleSubmit( (data) => {
        console.log('Datos: ', data);
        
    })
    

    return (
    <div className='containerPrincipal'>
        <div className='containerSecundario'>
            <Form 
            onSubmit={onSubmit}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Usuario"
                name="usuario"
                rules={[
                    {
                        required: true,
                        message: 'Por favir ingresa tu usuario!',
                    },
                ]}
            >
            <Input {...register("usuario")} />
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="contraseña"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingresa tu contraseña!',
                    },
                ]}
            >
            <Input.Password {...register("contraseña")} />
            </Form.Item>

            <Form.Item 
                
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
            </Form>
        </div>
    </div>
    
    )
}


