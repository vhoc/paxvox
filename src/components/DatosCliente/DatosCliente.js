import React from "react"
import './DatosCliente.css'
import Form from 'react-bootstrap/Form'
import ButtonSend from "../ButtonSend/ButtonSend"

const DatosCliente = () => {

    return (

        <>
            <div id="datos-cliente" className="datosClienteWrapper">
                <h1>¿Puedes contarnos un poco de ti?</h1>
                <h3>Es opcional &#128521;</h3>
                
                {/* Nombre */}
                <Form.Group className="mb-3 col-10 col-sm-8" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                {/* E-mail */}
                <Form.Group className="mb-3 col-10 col-sm-8" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>

                {/* Teléfono */}
                <Form.Group className="col-10 col-sm-8" controlId="formBasicPhone">
                    <Form.Control type="tel" placeholder="Número telefónico" />
                </Form.Group>

                <small className="mt-1 text-white">* Al poner tus datos aceptas recibir descuentos, promociones y noticias en tu correo o teléfono.</small>

                <ButtonSend/>


            </div>
        </>

    )

}

export default DatosCliente