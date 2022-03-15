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
    
        <h1>{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsConstainer}>
                <Button
                    className={ [classes.optionButton, "btn-danger"]}
                    onClick={ (e) => {
                            props.setFrecuenciaVisita("Es mi Primera Vez")
                            props.onClick(e)
                        }
                    }
                >
                    Es mi Primera Vez
                </Button>

                <Button
                    className={ [classes.optionButton, "btn-warning"]}
                    onClick={ (e) => {
                            props.setFrecuenciaVisita("Mas de una vez al AÑO")
                            props.onClick(e)
                        }
                    }
                >
                    Más de 1 vez al <strong>Año</strong>
                </Button>

                <Button
                    className={ [classes.optionButton, "btn-success"]}
                    onClick={ (e) => {
                            props.setFrecuenciaVisita("Mas de una vez al MES")
                            props.onClick(e)
                        }
                    }
                >
                    Más de 1 vez al <strong>Mes</strong>
                </Button>

                <Button
                    className={ [classes.optionButton, "btn-primary"] }
                        onClick={ (e) => {
                            props.setFrecuenciaVisita("Mas de una vez a la SEMANA")
                            props.onClick(e)
                        }
                    }
                >
                    Más de 1 vez a la <strong>Semana</strong>
                </Button>
            </div>

        </Form.Label>

    </div>

}

export default forwardRef(FieldColorSelect)