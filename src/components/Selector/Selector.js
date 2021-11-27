import React, { useState } from "react"
import Select from "react-select"
import ButtonNext from '../ButtonNext/ButtonNext'

const meserosEjemplo = [
    {
        name: "Mesero 1",
        value: "vMesero 1"
    },
    {
        name: "Mesero 2",
        value:"vMesero 2"
    }
]

const Selector = ( props ) => {

    const [ value , setValue ] = useState({})    

    return(

        <>

            <div id={ props.inputName } className="questionWrapper col-10 col-sm-8" >
                <h1>{ props.title }</h1>
                <Select
                    aria-label="Selecciona tu mesero"
                    name={ props.inputName }
                    options={ meserosEjemplo }
                    value={ value }
                    onChange={ setValue }
                    getOptionLabel={ (option) => option.name }
                    getOptionValue={ (option) => option.value }
                />
                <ButtonNext id={ props.nextId } />
            </div>

            

        </>

    )

}

export default Selector