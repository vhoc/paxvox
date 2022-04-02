import React, {useState} from 'react'
import './FieldSelectCiudad.module.css'
import Select from 'react-select'

const FieldSelectCiudad = ( props ) => {

    // States
    const [optionsCiudades, setOptionsCiudades] = useState([
      { name: 'Ciudad Obregón', id: '1' },
      { name: 'Guaymas', id: '2' },
      { name: 'Hermosillo', id: '3' },
    ])

    /**
     * getCities
     * Obtains the list of waiters from the API.
     *//*
    const getCities = async () => {
      setOptionsCiudades(['Ciudad Obregón', 'Guaymas', 'Hermosillo' ])
    }*/

    /**
     * Effect: Get list of waiters (meseros) and
     * populate the Select input with it.
     */
    //useEffect(() => getCities())

    return (
    
      <div id="nombre-ciudad" className="questionWrapper col-10 col-sm-8">
        <h1>{ props.number }.</h1>
        <h1>{ props.title }</h1>
        <Select
          aria-label={ props.title }
          name={ props.inputName }
          options={ optionsCiudades }
          isSearchable={ false } 
          onChange={(e) => {
            props.setNombreCiudad(e)
            props.scrollHandler(props.forwardedNextRef)
          }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />
      </div>

    )

}

export default FieldSelectCiudad