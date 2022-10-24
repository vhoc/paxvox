import React, {useState, useEffect} from 'react'
import './FieldSelectRepartidor.module.css'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Navigate} from 'react-router-dom'

const FieldSelectRepartidor = ( props ) => {

    // States
    const [optionsRepartidor, setOptionsRepartidor] = useState([{ name: 'Cargando...', id: '0' },])

    /**
     * getWaiters
     * @param {string} location 
     * @returns {object}
     * 
     * Obtains the list of waiters from the API.
     */
    const getRepartidores = async (location) => {

      try {
        const response = await axios.get(`https://paxvox.waxy.app/api/repartidores/${location}`, {
        })
        setOptionsRepartidor(response.data)
      } catch (exception) {
        switch(exception.response.status) {
          case 401:
              Swal.fire("Error", "No se pudo obtener la lista de meseros. Vuelva a ingresar al sistema", "error")
              localStorage.removeItem('token')
              return <Navigate to="/"/>
          default:
              Swal.fire("Error", `Ha ocurrido un error: (${exception.response.data})`, "error")
              console.log(`${exception.message}`)
              break;
        }
      }

    }

    /**
     * Effect: Get list of waiters (meseros) and
     * populate the Select input with it.
     */
    useEffect(() => getRepartidores(props.locationId), [props.locationId])

    return (
    
      <div id="nombre-mesero" className="questionWrapper col-10 col-sm-8">
        <h1>{ props.number }.</h1>
        <h1>{ props.title }</h1>
        <Select
          aria-label={ props.title }
          name={ props.inputName }
          options={ optionsRepartidor }
          isSearchable={ false } 
          onChange={(e) => {
            props.setNombreMesero(e.name)
            props.scrollHandler(props.forwardedNextRef)
          }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
        />
      </div>

    )

}

export default FieldSelectRepartidor