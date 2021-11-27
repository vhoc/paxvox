import React from "react"
import Button from 'react-bootstrap/Button'
import './ButtonSend.css'
import { FaTelegramPlane } from 'react-icons/fa'

const ButtonSend = ( props ) => {

    return(

        <>
            <Button variant="primary" size="lg" href={ props.id } className="buttonSend"><FaTelegramPlane/> Finalizar</Button>
        </>

    )

}

export default ButtonSend