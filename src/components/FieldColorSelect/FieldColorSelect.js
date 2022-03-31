import React, {forwardRef} from "react"
import classes from './FieldColorSelect.module.css'
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

/**
 * FieldColorSelect component.
 * @param {object} props 
 * @param {*} ref
 * 
 * 4 button control with values from 1 through 4.
 */
const FieldColorSelect = (props, ref) => {

    return <div ref={ref} className={classes.questionWrapper}>
    
        <h1>{ props.number }.</h1>
        <h1>{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsContainer}>

                <Button
                    className={ [classes.optionButton, classes.btnGreen].join(' ') }
                        onClick={ (e) => {
                            props.setValue("Mas de una vez a la SEMANA")
                            props.onClick(e)
                        }
                    }
                >
                    + de 1 vez a la <strong>Semana</strong>
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnYellow].join(' ') }
                    onClick={ (e) => {
                            props.setValue("Mas de una vez al MES")
                            props.onClick(e)
                        }
                    }
                >
                    + de 1 vez al <strong>Mes</strong>
                </Button>


                <Button
                    className={ [classes.optionButton, classes.btnOrange].join(' ') }
                    onClick={ (e) => {
                            props.setValue("Mas de una vez al AÑO")
                            props.onClick(e)
                        }
                    }
                >
                    + de 1 vez al <strong>Año</strong>
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnRed].join(' ') }
                    onClick={ (e) => {
                            props.setValue("Es mi Primera Vez")
                            props.onClick(e)
                        }
                    }
                >
                    Primera Vez
                </Button>

               
            </div>

        </Form.Label>

    </div>

}

export default forwardRef(FieldColorSelect)