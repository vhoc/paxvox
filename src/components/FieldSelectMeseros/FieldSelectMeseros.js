import React, {useState, useEffect} from 'react'
import './FieldSelectMeseros.module.css'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Navigate} from 'react-router-dom'

const FieldSelectMeseros = ( props ) => {

    // States
    const [optionsMeseros, setOptionsMeseros] = useState([{ name: 'Cargando...', id: '0' },])

    /**
     * Function getWaiters para obtener los meseros del API
     */
    const getWaiters = async (location) => {

      try {
        const response = await axios.get(`https://paxvox.waxy.app/api/waiters/${location}`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        setOptionsMeseros(response.data)
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
      
/*
      .then(response => {
        setOptionsMeseros(response.data)
      })
      .catch(error => {
        
      })*/

    }

    /**
     * Effect: Get list of waiters (meseros) and
     * populate the Select input with it.
     */
    useEffect(() => getWaiters(props.locationId), [props.locationId])

    return <div id="nombre-mesero" className="questionWrapper col-10 col-sm-8">
    <h1>{ props.title }</h1>
    <Select
      aria-label={ props.title }
      name={ props.inputName }
      options={ optionsMeseros }
      onChange={(e) => {
        props.setNombreMesero(e.name)
        props.scrollHandler(props.forwardedNextRef)
      }}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
    />
  </div>

}

export default FieldSelectMeseros