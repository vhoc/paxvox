import React, {forwardRef, useState} from 'react'
import classes from './CustomerData.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaTelegramPlane } from 'react-icons/fa'

const CustomerData = (props, ref) => {

  const [internalValidationNombre, setInternalValidationNombre] = useState(true)
  const [internalValidationEmail, setInternalValidationEmail] = useState(true)
  const [internalValidationTelefono, setInternalValidationTelefono] = useState(true)

    /**
     * Helpers
     */
     const validateString = (stringState, validationState, internalValidationState, string, pattern) => {
        // Since the field is not required, leaving it blank passes the validation
        if ( string === "" ) {
          stringState("No proporcionado")
          validationState(true)
          internalValidationState(true)
          console.log("campo vacío y válido")
        } else {
          // If it's not empty, validate the string.
          if (string.match(pattern)) {
            stringState(string)
            validationState(true)
            internalValidationState(true)
            console.log("campo válido")
          } else {
            stringState("")
            validationState(false)
            internalValidationState(false)
            console.log("campo inválido")
          }
        }
      }

    /**
     * Handlers
     */
     const handleChangeClienteNombre = (event) => {
        validateString( props.setClienteNombre, props.setValidationClienteNombre, setInternalValidationNombre, event.target.value, /^[\p{L} ,.'-]+$/u )
      }
    
      const handleChangeClienteEmail = (event) => {
        validateString( props.setClienteEmail, props.setValidationClienteEmail, setInternalValidationEmail, event.target.value, /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g )
      }
    
      const handleChangeClienteTelefono = (event) => {
        validateString( props.setClienteTelefono, props.setValidationClienteTelefono, setInternalValidationTelefono, event.target.value, /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm )
      }

    return <div id={props.inputName} className={classes.datosClienteWrapper} ref={ref}>
                <h1>{props.title.h1}</h1>
                <h3>{props.title.h3}</h3>

                {/* Nombre */}
                <Form.Group
                className="mb-3 col-10 col-sm-8"
                controlId="formBasicText"
                >
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={handleChangeClienteNombre}
                        maxLength="24"
                    />
                    {internalValidationNombre === false && <small className={classes.error}>El nombre que has escrito no es válido.</small> }
                </Form.Group>

                {/* E-mail */}
                <Form.Group
                className="mb-3 col-10 col-sm-8"
                controlId="formBasicEmail"
                >
                    <Form.Control
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={handleChangeClienteEmail}
                        maxLength="48"
                    />
                    {internalValidationEmail === false && <small className={classes.error}>El correo electrónico que has escrito no es válido.</small> }
                </Form.Group>

                {/* Teléfono */}
                <Form.Group className="col-10 col-sm-8" controlId="formBasicPhone">
                    <Form.Control
                        type="tel"
                        placeholder="Número telefónico"
                        name="telefono"
                        onChange={handleChangeClienteTelefono}
                        maxLength="15"
                    />
                    {internalValidationTelefono === false && <small className={classes.error}>El teléfono que has ingresado no tiene un formato o longitud válidos.</small> }
                </Form.Group>

                <small className="mt-1 text-white">
                * Al poner tus datos aceptas recibir descuentos, promociones y
                noticias en tu correo o teléfono.
                </small>

                <Button
                variant="primary"
                size="lg"
                className="buttonSend"
                type="submit"
                >
                <FaTelegramPlane /> Finalizar
                </Button>
            </div>

}

export default forwardRef(CustomerData)
