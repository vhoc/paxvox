import React, { useState, forwardRef } from "react"
import './Question.css'
import { Form } from "react-bootstrap"
//import StarRating from "../StarRating/StarRating"
import ButtonNext from "../ButtonNext/ButtonNext"
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Question = ( { key, inputName, nextId, title }, ref ) => {

    const [ rating , setRating ]    = useState( null )
    const [ hover , setHover ]      = useState( null )

    //const navigate = useNavigate()

    /*const routeChange = () => {
        let path = '#' + nextId
        navigate.push( path )
    }*/

    return (

            <>
                <div id={ inputName } className="questionWrapper" >
                    <h1>{ title }</h1>
                    <div>
                        
                        { [ ... Array(5) ].map( (star, i) => {

                            const ratingValue = i + 1

                            return ( 
                                
                                <Form.Label>
                                    <Form.Control
                                        ref={ ref }
                                        key={ "radio-" + i }
                                        type="radio"
                                        name={ inputName }
                                        value={ ratingValue }
                                        
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
                    </div>
                    <ButtonNext id={ nextId } />
                </div>
            </>

        )

}

const forwardedQuestion = forwardRef( Question )

export default forwardedQuestion