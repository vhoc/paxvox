import React, { useState, forwardRef, useEffect } from "react"
import './Question.css'
import { Form } from "react-bootstrap"
import { FaStar } from 'react-icons/fa'

/**
 * Question component.
 * @param {object} props 
 * @param {*} ref
 * 
 * 5 star control with values from 1 through 4.
 */
const Question = ( props, ref ) => {

    const [ rating , setRating ]    = useState( null )
    const [ hover , setHover ]      = useState( null )

    const clearState = () => {
        setRating(null)
        setHover(null)
    }

    useEffect(clearState,[])

    return (

            <div ref={ref} className="questionWrapper">
                <h1>{ props.title }</h1>
                <div>
                    
                    { [ ...Array(5) ].map( (star, i) => {

                        const ratingValue = i + 1

                        return ( 
                            
                            <Form.Label key={i}>
                                <Form.Control
                                    type="radio"
                                    name={ props.inputName }
                                    value={ ratingValue }
                                    onClick={ () => { setRating( ratingValue ) } }
                                    onChange={ props.onChangeValue }
                                    
                                />
                                <FaStar
                                    className="ratingStar"
                                    color={ ratingValue <= ( hover || rating ) ? "#ffc107" : "#e4e5e9" }
                                    onMouseEnter={ () => setHover( ratingValue ) }
                                    onMouseLeave={ () => setHover( null ) }
                                    onClick={ e => props.onClick(e) }
                                />

                            </Form.Label>
                            )
                        } )

                    }
                </div>
            
            </div>

        )

}

export default forwardRef( Question )