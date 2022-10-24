import React, { useState, useRef, useEffect } from 'react'

import CustomerData from '../components/CustomerData/CustomerData'
import Form from 'react-bootstrap/Form'
import FieldSelectCiudad from '../components/FieldSelectCiudad/FieldSelectCiudad'
import SelectFormaPedido from '../components/FieldColorSelect/SelectFormaPedido'
import SelectTiempoEntrega from '../components/FieldColorSelect/SelectTiempoEntrega'
import CalidadDomicilio from '../components/FieldColorSelect/CalidadDomicilio'
import Swal from 'sweetalert2'
import axios from 'axios'

import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainDelivery = ( { sucursal } ) => {
  
  /**
   * States.
   * These will hold the selected/inputted data in the form
   * and their validation states (See CustomerData component).
   */
  const [location, setLocation] = useState({
    id: 0,
    name: '',
  })
  const [nombreCiudad, setNombreCiudad] = useState('')
  const [formaPedido, setFormaPedido] = useState('')
  const [tiempoEntrega, setTiempoEntrega] = useState('')
  const [calidadAtencion, setCalidadAtencion] = useState('')
  const [calificacionRepartidor, setCalificacionRepartidor] = useState('')
  const [calidadComida, setCalidadComida] = useState('')
  const [clienteNombre, setClienteNombre] = useState('No proporcionado')
  const [clienteEmail, setClienteEmail] = useState('No proporcionado')
  const [clienteTelefono, setClienteTelefono] = useState('No proporcionado')
  const [clienteComentarios, setClienteComentarios] = useState('No proporcionado')

  const [validationClienteNombre, setValidationClienteNombre] = useState(true)
  const [validationClienteEmail, setValidationClienteEmail] = useState(true)
  const [validationClienteTelefono, setValidationClienteTelefono] = useState(true)
  const [validationClienteComentarios, setValidationClienteComentarios] = useState(true)

  /**
   * References.
   * Their purpose is to identify the form fields components
   * to automatically scroll to the next one when the user clicks
   * or touches on the controls. See 'scrollHandler()' function.
   */
  const componentFormaPedido = useRef()
  const componentTiempoEntrega = useRef()
  const componentCalidadAtencion = useRef()
  const componentCalidadComida = useRef()
  const componentCalificacionRepartidor = useRef()
  const d1 = useRef()

  /**
   * Form Data container object
   * This is fed from the States and will be sent
   * to the API.
   */
  const formData = {
    clienteNombre: clienteNombre,
    clienteEmail: clienteEmail,
    clienteTelefono: clienteTelefono,
    clienteComentarios: clienteComentarios,
    idLocation: location.id,
    locationName: location.name,
    responses: {
      nombreCiudad: nombreCiudad,
      formaPedido: formaPedido,
      tiempoEntrega: tiempoEntrega,
      calidadAtencion: calidadAtencion,
      calidadComida: calidadComida,
      calificacionRepartidor: calificacionRepartidor,
    }
  }

  /**
   * submitForm (object)
   * @param {object} data 
   * 
   * Posts the collected form data to the API.
   */
  const submitForm = async (data) => {
    const requestOptions = {
      headers: {
        'Content-Type':'application/json',
      },
    }

    try {
      await axios.post('https://paxvox.waxy.app/api/delivery-submissions', data, requestOptions)
      Swal.fire("¡Gracias!","Recibimos tu respuesta. ¡Gracias por tu ayuda!", "success" ).then( () => {
        window.location.reload(false)
      })
      //navigate(`/${nombreSucursal}`, {replace: true})
      
    } catch (exception) {
      console.log(exception);
      switch(exception.response.status) {
        case 401:
          Swal.fire("Error", "Error al enviar las respuestas (401)", "error")
          break;
        default:
          console.log(`${exception.message}`)
          Swal.fire("Error", `Error desconocido: (${exception.response.data})`, "error")
          break;
      }
    }
    

  }

  /**
   * handleSubmit (event)
   * @param {event} event
   * 
   * Validates and executes the submission of the data to the API.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Check all questions have been rated.
    if( nombreCiudad === '' || formaPedido === '' || tiempoEntrega === '' || calidadAtencion === '' || calidadComida === '' || calificacionRepartidor === '' ) {
      Swal.fire("Error", `No has calificado todos los criterios.`, "warning")
      return
    }
  
    // Check all validation states to be true.
    if ( validationClienteNombre && validationClienteEmail && validationClienteTelefono && validationClienteComentarios ) {
      await submitForm(formData)
    } else {
      Swal.fire("Error", `Verifica que los datos que ingresaste sean correctos`, "error")
    }
    
  }

  /**
   * scrollHandler(reference)
   * Scrolls to the next form field.
   */
  const scrollHandler = (ref) => {
    window.scrollTo({
      behaviour: 'smooth',
      top: ref.current.offsetTop,
    })
  }

  useEffect( () => {
    window.scrollTo({
      behaviour: 'smooth',
      top: 0,
    })
  }, [] )

  useEffect( () => {
    const getLocation = async () => {
      try {
        const location = await axios.get( `https://paxvox.waxy.app/api/location/${ sucursal }` )
        setLocation( location.data )
      } catch ( error ) {
        console.warn( error )
      }
    }
    
    getLocation()

  }, [sucursal] )

  return (
      <Form
        id="poll"
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >

        <FieldSelectCiudad
          number='1'
          title={`Selecciona tu ciudad`}
          //ref={ componentFieldSelectMeserosRef }
          forwardedNextRef={componentFormaPedido}
          locationId={ sucursal }
          setNombreCiudad={ nombreCiudad => setNombreCiudad(nombreCiudad)}
          scrollHandler={ scrollHandler }
        />

        <SelectFormaPedido
          ref={componentFormaPedido}
          number='2'
          title="¿Por qué medio fue tu pedido?"
          inputName="forma-pedido"
          setValue={ formaPedido => setFormaPedido(formaPedido)}
          onClick={() => scrollHandler(componentTiempoEntrega)}
        />

        <SelectTiempoEntrega
          ref={componentTiempoEntrega}
          number='3'
          title="Tiempo de Entrega"
          inputName="tiempo-entrega"
          setValue={ tiempoEntrega => setTiempoEntrega(tiempoEntrega)}
          onClick={() => scrollHandler(componentCalidadAtencion)}
        />

        <CalidadDomicilio
          ref={componentCalidadAtencion}
          inputName="atencion-domicilio"
          number='4'
          title="Calidad en la Atención"
          setValue={ calidadAtencion => setCalidadAtencion(calidadAtencion)}
          onClick={() => scrollHandler(componentCalidadComida)}
        />

        <CalidadDomicilio
          ref={componentCalidadComida}
          inputName="calidad-sazon"
          number='5'
          title="Calidad y sazón"
          setValue={ calidadComida => setCalidadComida(calidadComida) }
          onClick={() => scrollHandler(componentCalificacionRepartidor)}
        />

        <CalidadDomicilio
          ref={componentCalificacionRepartidor}
          inputName="opinion-repartidor"
          number='6'
          title="Opinión del repartidor"
          setValue={ calificacionRepartidor => setCalificacionRepartidor(calificacionRepartidor) }
          onClick={() => scrollHandler(d1)}
        />

        <CustomerData
          ref={d1}
          inputName="datos-cliente"
          number='7'
          title={ {h1: "¿Puedes contarnos un poco de ti?", h3: "Es opcional 😉" } }
          setClienteNombre={ clienteNombre => setClienteNombre(clienteNombre) }
          setClienteEmail={ clienteEmail => setClienteEmail(clienteEmail) }
          setClienteTelefono={ clienteTelefono => setClienteTelefono(clienteTelefono) }
          setClienteComentarios={ clienteComentarios => setClienteComentarios(clienteComentarios) }
          setValidationClienteNombre={ validationClienteNombre => setValidationClienteNombre(validationClienteNombre) }
          setValidationClienteEmail={ validationClienteEmail => setValidationClienteEmail(validationClienteEmail) }
          setValidationClienteTelefono={ validationClienteTelefono => setValidationClienteTelefono(validationClienteTelefono) }
          setValidationClienteComentarios={ validationClienteComentarios => setValidationClienteComentarios(validationClienteComentarios) }
        />        
      </Form>
    )
  }
  
  export default MainDelivery