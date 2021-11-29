import React from "react"
import Button from 'react-bootstrap/Button'
import './ButtonNext.css'
import { FaArrowDown } from 'react-icons/fa'

const ButtonNext = ( props ) => {

    return(

        <>
            <Button variant="outline-warning" size="lg" href={ props.id } className="buttonNext">
                <FaArrowDown/>
            </Button>
        </>

    )

}

export default ButtonNext