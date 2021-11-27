import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { FaStar } from 'react-icons/fa'
import './StarRating.css'

const StarRating = ( props ) => {
    
    const [ rating , setRating ]    = useState( null )
    const [ hover , setHover ]      = useState( null )
    

    return (

        <>
            { [ ... Array(5) ].map( (star, i) => {

                const ratingValue = i + 1

                return ( 
                    
                    <Form.Label>
                        
                        <Form.Control
                            key={ "radio-" + i }
                            type="radio"
                            name={ props.inputName }
                            value={ ratingValue }
                            onClick={ () => setRating( ratingValue ) }
                        />
                        <FaStar
                            key={ "star-" + i }
                            className="ratingStar"
                            color={ ratingValue <= ( hover || rating ) ? "#ffc107" : "#e4e5e9" }
                            onMouseEnter={ () => setHover( ratingValue ) }
                            onMouseLeave={ () => setHover( null ) }
                        />

                    </Form.Label>
                    )
                } )
            
            }
            
        </>

    )

}

export default StarRating