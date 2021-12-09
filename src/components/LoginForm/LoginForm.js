import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from './LoginForm.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setAuthenticated] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const payload = { username: username, password: password }

        //console.log(payload)
        axios.post('https://paxvox.waxy.app/api/login', payload)
            .then(response => {
                localStorage.setItem('token', `Bearer ${response.data.token}`)
                setAuthenticated(true)
                //console.log(response.data.token)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    if ( localStorage.getItem('token') && isAuthenticated === true ) {
        return <Navigate to="/main"/>
    }

    return(

        <div className={ classes.container }>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
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