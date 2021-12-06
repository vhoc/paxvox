import React, {useState, useEffect} from 'react'
import './FieldSelectMeseros.module.css'
import Select from 'react-select'

const FieldSelectMeseros = ( props ) => {

    // States
    const [optionsMeseros, setOptionsMeseros] = useState([{ name: 'Cargando...', id: '0' },])

    /**
     * Function getWaiters para obtener los meseros del API
     */
    const getWaiters = () => {
        
      fetch(`https://paxvox.waxy.app/api/waiters/${props.locationId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const meseros = []

        for (const key in data) {
          const mesero = {
            id: key,
            name: data[key].name,
          }
          meseros.push(mesero)
        }

        setOptionsMeseros(meseros)
      });
    }

    /**
     * Effect: Get list of waiters (meseros) and
     * populate the Select input with it.
     */
     useEffect(getWaiters, [])

    return <div id="nombre-mesero" className="questionWrapper col-10 col-sm-8">
    <h1>{ props.title }</h1>
    <Select
      aria-label={ props.title }
      name={ props.inputName }
      options={ optionsMeseros }
      onChange={(e) => {
        props.setNombreMesero(e.id)
        props.handleChildScroll(props.forwardedNextRef)
      }}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
    />
  </div>

}

export default FieldSelectMeseros