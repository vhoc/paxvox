import React, {forwardRef} from "react"
import classes from './SelectFormaPedido.module.css'
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

const SelectFormaPedido = (props, ref) => {

    return <div ref={ref} className={classes.questionWrapper}>
    
        <h1>{ props.number }.</h1>
        <h1 className="mb-5">{ props.title }</h1>

        <Form.Label>

            <div className={classes.optionsContainer}>

                <Button
                    className={ [classes.optionButton, classes.btnWhatsApp].join( ' ' ) }
                        variant={ 'whatsapp' }
                        onClick={ (e) => {
                            props.setValue("WhatsApp")
                            props.onClick(e)
                        }
                    }
                >
                    WhatsApp
                </Button>

                <Button     
                    className={ [classes.optionButton, classes.btnFacebook].join(' ') }
                    variant={ 'facebook' }
                        onClick={ (e) => {
                            props.setValue("Facebook")
                            props.onClick(e)
                        }
                    }
                >
                    Facebook
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnTelefono].join(' ') }
                    variant={ 'telefono' }
                    onClick={ (e) => {
                            props.setValue("Telefono")
                            props.onClick(e)
                        }
                    }
                >
                    Telefono
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnPagina].join(' ') }
                    variant={ 'pagina' }
                    onClick={ (e) => {
                            props.setValue("Página Web")
                            props.onClick(e)
                        }
                    }
                >
                    Página Web
                </Button>

                <Button
                    className={ [classes.optionButton, classes.btnRed].join(' ') }
                    variant={ 'red' }
                    onClick={ (e) => {
                            props.setValue("App móvil")
                            props.onClick(e)
                        }
                    }
                >
                    App móvil
                </Button>

            </div>

        </Form.Label>

    </div>

}

export default forwardRef(SelectFormaPedido)