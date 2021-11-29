import React, { useState, forwardRef } from "react"
import './Question.css'
import { Form } from "react-bootstrap"
//import StarRating from "../StarRating/StarRating"
import ButtonNext from "../ButtonNext/ButtonNext"
import { FaStar } from 'react-icons/fa'

const Question = ( { key, inputName, nextId, title, onClick }, ref ) => {

    const [ rating , setRating ]    = useState( null )
    const [ hover , setHover ]      = useState( null )

    //const navigate = useNavigate()

    /*const routeChange = () => {
        let path = '#' + nextId
        navigate.push( path )
    }*/

    return (

            <>
                <div id={ inputName } className="questionWrapper" ref={ ref }>
                    <h1>{ title }</h1>
                    <div>
                        
                        { [ ... Array(5) ].map( (star, i) => {

                            const ratingValue = i + 1

                            return ( 
                                
                                <Form.Label>
                                    <Form.Control
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
                                        onClick={ onClick }
                                    />

                                </Form.Label>
                                )
                            } )

                        }
                    </div>
                </div>
            </>

        )

}

export default forwardRef( Question )