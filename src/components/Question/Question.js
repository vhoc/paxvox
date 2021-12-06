import React, { useState, forwardRef } from "react"
import './Question.css'
import { Form } from "react-bootstrap"
import { FaStar } from 'react-icons/fa'

const Question = ( { inputName, title, onClick, onChangeValue }, ref ) => {

    const [ rating , setRating ]    = useState( null )
    const [ hover , setHover ]      = useState( null )

    return (

            <>
                    <h1>{ title }</h1>
                    <div>
                        
                        { [ ...Array(5) ].map( (star, i) => {

                            const ratingValue = i + 1

                            return ( 
                                
                                <Form.Label>
                                    <Form.Control
                                        ref={ref}
                                        type="radio"
                                        name={ inputName }
                                        value={ ratingValue }
                                        onClick={ () => { setRating( ratingValue ) } }
                                        onChange={ onChangeValue }
                                        
                                    />
                                    <FaStar
                                        
                                        className="ratingStar"
                                        color={ ratingValue <= ( hover || rating ) ? "#ffc107" : "#e4e5e9" }
                                        onMouseEnter={ () => setHover( ratingValue ) }
                                        onMouseLeave={ () => setHover( null ) }
                                        onClick={ e => onClick(e) }
                                    />

                                </Form.Label>
                                )
                            } )

                        }
                    </div>
            
            </>

        )

}

export default forwardRef( Question )