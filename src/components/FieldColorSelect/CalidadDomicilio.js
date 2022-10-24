import React, {forwardRef} from "react"
import classes from './FieldColorSelect5.module.css'
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

/**
 * FieldColorSelect component.
 * @param {object} props 
 * @param {*} ref
 * 
 * 4 button control with values from 1 through 4.
 */
const CalidadDomicilio = (props, ref) => {

    return <div ref={ref} className={classes.questionWrapper}>
    
        <h1>{ props.number }.</h1>
        <h1 className="mb-5">{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsContainer}>

                <Button
                    className={ [classes.optionButton, classes.btnExcellent].join( ' ' ) }
                        variant={ 'excellent' }
                        onClick={ (e) => {
                            props.setValue("Excelente")
                            props.onClick(e)
                        }
                    }
                >
                    Excelente
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnGreen].join(' ') }
                    variant={ 'green' }
                        onClick={ (e) => {
                            props.setValue("Bien")
                            props.onClick(e)
                        }
                    }
                >
                    Bien
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnYellow].join(' ') }
                    variant={ 'yellow' }
                    onClick={ (e) => {
                            props.setValue("Regular")
                            props.onClick(e)
                        }
                    }
                >
                    Regular
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnOrange].join(' ') }
                    variant={ 'orange' }
                    onClick={ (e) => {
                            props.setValue("Mal")
                            props.onClick(e)
                        }
                    }
                >
                    Mal
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnRed].join(' ') }
                    variant={ 'red' }
                    onClick={ (e) => {
                            props.setValue("Muy Mal")
                            props.onClick(e)
                        }
                    }
                >
                    Muy Mal
                </Button>

            </div>

        </Form.Label>

    </div>

}

export default forwardRef(CalidadDomicilio)