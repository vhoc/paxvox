import React, {forwardRef} from "react"
import classes from './FieldColorSelect.module.css'
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

const FieldColorSelect = (props, ref) => {

    //const [frecuencia, setFrecuencia] = useState(null)

    return <div ref={ref} className={classes.questionWrapper}>
    
        <h1>{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsConstainer}>
                <Button
                    className={ [classes.optionButton, "btn-danger"]}
                    onClick={ (e) => {
                            props.setFrecuenciaVisita(1)
                            props.onClick(e)
                        }
                    }
                >
                    Es mi Primera Vez
                </Button>

                <Button
                    className={ [classes.optionButton, "btn-warning"]}
                    onClick={ (e) => {
                            props.setFrecuenciaVisita(2)
                            props.onClick(e)
                        }
                    }
                >
                    Más de 1 vez al Año
                </Button>

                <Button
                    className={ [classes.optionButton, "btn-success"]}
                    onClick={ (e) => {
                            props.setFrecuenciaVisita(3)
                            props.onClick(e)
                        }
                    }
                >
                    Más de 1 vez al Mes
                </Button>

                <Button
                    className={ [classes.optionButton, "btn-primary"] }
                        onClick={ (e) => {
                            props.setFrecuenciaVisita(4)
                            props.onClick(e)
                        }
                    }
                >
                    Más de 1 vez a la Semana
                </Button>
            </div>

        </Form.Label>

    </div>

}

export default forwardRef(FieldColorSelect)