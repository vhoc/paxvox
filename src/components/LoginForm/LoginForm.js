import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from './LoginForm.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useAuth, useUpdateAuth } from '../../AuthContext'

/**
 * LoginForm Component
 * 
 * Authenticates user and password on a remote Lumen API
 * If successful, it saves the fetched token to Local Storage
 * and redirects to "/main" where the poll form is.
 */
const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const auth = useAuth()
    const doAuth = useUpdateAuth()

    // Axios call to login onto the Lumen API
    const doLogin = async (payload) => {
        try {
            const response = await axios.post('https://paxvox.waxy.app/api/login', payload)
            const token = await response.data.token
            localStorage.setItem('token', `Bearer ${token}`)
            doAuth()
        } catch (exception) {
            switch(exception.response.status) {
                case 422:
                    Swal.fire("Error", "Se requiere ingresar el usuario y la contraseña correctamente.", "error")
                    break;
                case 401:
                    Swal.fire("Error", "Se ha ingresado un usuario o contraseña incorrecto(s).", "error")
                    break;
                default:
                    Swal.fire("Error", `Error desconocido: (${exception.response.data})`, "error")
                    console.log(`${exception.message}`)
                    break;
            }     
        }
        

    }

    // Submission Handler
    const handleSubmit = (event) => {
        event.preventDefault()
        doLogin({username: username, password: password})
    }

    // Loads the form when there is a token in localStorage.
    if ( localStorage.getItem('token') ) {
        return <Navigate to="/main"/>
    }
    
    // Loads the form as soon as we log in. (First time log-in)
    if( auth ) {
        return <Navigate to="/main"/>
    }

    return(

        <div className={ classes.container }>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        required
                        className={classes.loginInputs}
                        type="text"
                        placeholder="Ingresa el usuario."
                        onChange={event => {
                            setUsername(event.target.value)
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        required
                        className={classes.loginInputs}
                        type="password"
                        placeholder="Ingresa la contraseña."
                        onChange={event => {
                            setPassword(event.target.value)
                        }}
                        />
                </Form.Group>

                <Button
                    variant="primary"
                    size="lg"
                    className="px-5"
                    onClick={handleSubmit}
                >
                    Entrar
                </Button>

            </Form>
        </div>

    )

}

export default LoginForm