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
const FieldColorSelect5 = (props, ref) => {

    return <div ref={ref} className={classes.questionWrapper}>
    
        <h1>{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsContainer}>
                <Button
                    className={ [classes.optionButton, classes.btnRed].join(' ') }
                    variant={ 'red' }
                    onClick={ (e) => {
                            props.setValue("1")
                            props.onClick(e)
                        }
                    }
                >
                    Muy Mal
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnOrange].join(' ') }
                    variant={ 'orange' }
                    onClick={ (e) => {
                            props.setValue("2")
                            props.onClick(e)
                        }
                    }
                >
                   Mal
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnYellow].join(' ') }
                    variant={ 'yellow' }
                    onClick={ (e) => {
                            props.setValue("3")
                            props.onClick(e)
                        }
                    }
                >
                    Regular
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnGreen].join(' ') }
                    variant={ 'green' }
                        onClick={ (e) => {
                            props.setValue("4")
                            props.onClick(e)
                        }
                    }
                >
                    Bien
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnExcellent].join( ' ' ) }
                        variant={ 'excellent' }
                        onClick={ (e) => {
                            props.setValue("5")
                            props.onClick(e)
                        }
                    }
                >
                    Excelente
                </Button>

            </div>

        </Form.Label>

    </div>

}

export default forwardRef(FieldColorSelect5)