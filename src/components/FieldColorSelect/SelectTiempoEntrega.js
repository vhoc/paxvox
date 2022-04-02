import React, {forwardRef} from "react"
import classes from './FieldColorSelect.module.css'
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

/**
 * SelectTiempoEntrega component.
 * @param {object} props 
 * @param {*} ref
 * 
 * 4 button control with values from 1 through 4.
 */
const SelectTiempoEntrega = (props, ref) => {

    return <div ref={ref} className={classes.questionWrapper}>
    
        <h1>{ props.number }.</h1>
        <h1>{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsContainer}>

                <Button
                    className={ [classes.optionButton, classes.btnGreen].join(' ') }
                        onClick={ (e) => {
                            props.setValue("30-45 minutos")
                            props.onClick(e)
                        }
                    }
                >
                    30-45 minutos
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnYellow].join(' ') }
                    onClick={ (e) => {
                            props.setValue("45-60 minutos")
                            props.onClick(e)
                        }
                    }
                >
                    45-60 minutos
                </Button>


                <Button
                    className={ [classes.optionButton, classes.btnOrange].join(' ') }
                    onClick={ (e) => {
                            props.setValue("60-75 minutos")
                            props.onClick(e)
                        }
                    }
                >
                    60-75 minutos
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnRed].join(' ') }
                    onClick={ (e) => {
                            props.setValue("Mas de 75 minutos")
                            props.onClick(e)
                        }
                    }
                >
                    Mas de 75 minutos
                </Button>

               
            </div>

        </Form.Label>

    </div>

}

export default forwardRef(SelectTiempoEntrega)