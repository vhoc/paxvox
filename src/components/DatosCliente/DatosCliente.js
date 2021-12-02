import React, { forwardRef } from "react"
import './DatosCliente.css'
import Form from 'react-bootstrap/Form'
import { FaTelegramPlane } from "react-icons/fa"
import Button from 'react-bootstrap/Button'

const DatosCliente = ( props, ref ) => {

    return (

        <>
            <div id="datos-cliente" className="datosClienteWrapper" ref={ ref }>
                <h1>¿Puedes contarnos un poco de ti?</h1>
                <h3>Es opcional &#128521;</h3>
                
                {/* Nombre */}
                <Form.Group className="mb-3 col-10 col-sm-8" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Nombre" name="nombre"/>
                </Form.Group>

                {/* E-mail */}
                <Form.Group className="mb-3 col-10 col-sm-8" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Correo electrónico" name="email"/>
                </Form.Group>

                {/* Teléfono */}
                <Form.Group className="col-10 col-sm-8" controlId="formBasicPhone">
                    <Form.Control type="tel" placeholder="Número telefónico" name="telefono"/>
                </Form.Group>

                <small className="mt-1 text-white">* Al poner tus datos aceptas recibir descuentos, promociones y noticias en tu correo o teléfono.</small>

                <Button variant="primary" size="lg" className="buttonSend" tyle="submit"><FaTelegramPlane/> Finalizar</Button>


            </div>
        </>

    )

}

export default forwardRef( DatosCliente )