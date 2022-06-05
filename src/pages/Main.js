import React, { useState, useRef, useEffect } from 'react'

import CustomerData from './../components/CustomerData/CustomerData'
import Form from 'react-bootstrap/Form'
import FieldSelectMeseros from './../components/FieldSelectMeseros/FieldSelectMeseros'
import FieldColorSelect from './../components/FieldColorSelect/FieldColorSelect'
import FieldColorSelect5 from '../components/FieldColorSelect/FieldColorSelect5'
import Button from 'react-bootstrap/Button'
import classes from '../components/FieldColorSelect/FieldColorSelect.module.css'

import Swal from 'sweetalert2'
import axios from 'axios'

import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Main = ( { sucursal } ) => {
  
  /**
   * States.
   * These will hold the selected/inputted data in the form
   * and their validation states (See CustomerData component).
   */
  const [location, setLocation] = useState({
    id: 0,
    name: '',
  })
  const [nombreMesero, setNombreMesero] = useState('')
  const [clienteMesa, setClienteMesa] = useState('')
  const [frecuenciaVisita, setFrecuenciaVisita] = useState('')
  const [atencionMesero, setAtencionMesero] = useState('')
  const [rapidezServicio, setRapidezServicio] = useState('')
  const [calidadComida, setCalidadComida] = useState('')
  const [experienciaGeneral, setExperienciaGeneral] = useState('')
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
  const componentFrecuenciaVisitaRef = useRef()
  const componentClienteMesaRef = useRef()
  const componentAtencionMeseroRef = useRef()
  const componentRapidezServicioRef = useRef()
  const componentCalidadComidaRef = useRef()
  const componentExperienciaGeneralRef = useRef()
  const d1 = useRef()

  /**
   * Form Data container object
   * This is fed from the States and will be sent
   * to the API.
   */
  const formData = {
    clienteNombre: clienteNombre,
    clienteMesa: clienteMesa,
    clienteEmail: clienteEmail,
    clienteTelefono: clienteTelefono,
    clienteComentarios: clienteComentarios,
    idLocation: location.id,
    locationName: location.name,
    responses: {
      mesero: nombreMesero,
      frecuenciaVisita: frecuenciaVisita,
      atencionMesero: atencionMesero,
      rapidezServicio: rapidezServicio,
      calidadComida: calidadComida,
      experienciaGeneral: experienciaGeneral,
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
      await axios.post('https://paxvox.waxy.app/api/submissions', data, requestOptions)
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
    if( nombreMesero === '' || frecuenciaVisita === '' || atencionMesero === '' || rapidezServicio === '' || calidadComida === '' || experienciaGeneral === '' ) {
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

  const handleMesaChange = event => {
    if ( isNaN(event.target.value) ) event.target.value = ''
    setClienteMesa( event.target.value )
  }

  // Redirect to login form when no token is found on local storage.
  /*
  if ( !localStorage.getItem('token') ) {
    console.log("no token found")
    return <Navigate to="/"/>
  }*/

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
        <FieldSelectMeseros
          number='1'
          title={`Selecciona tu mesero`}
          //ref={ componentFieldSelectMeserosRef }
          forwardedNextRef={componentClienteMesaRef}
          locationId={ sucursal }
          setNombreMesero={ nombreMesero => setNombreMesero(nombreMesero)}
          scrollHandler={ scrollHandler }
        />

        <Form.Group
          className={`${classes.questionWrapper} d-flex justify-content-center align-items-center`}
          controlId="mesa"
          ref={componentClienteMesaRef}
        >
          <h1>2.<br/>Selecciona tu Mesa</h1>
          <div className='col-6 col-xs-6 col-sm-3 col-md-3 col-lg-2 col-xl-2'>
          <Form.Control
            as='input'
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder=""
            name="mesa"
            onChange={handleMesaChange}
            maxLength={2}
          /></div>
        
        
        <Button className='mt-2' onClick={() => scrollHandler(componentFrecuenciaVisitaRef)}>
          Siguiente
        </Button>
        </Form.Group>

        <FieldColorSelect
          ref={componentFrecuenciaVisitaRef}
          number='2'
          title="¿Cada cuándo nos visitas?"
          inputName="frecuencia-visita"
          setValue={ frecuenciaVisita => setFrecuenciaVisita(frecuenciaVisita)}
          onClick={() => scrollHandler(componentAtencionMeseroRef)}
        />

        <FieldColorSelect5
          ref={componentAtencionMeseroRef}
          number='3'
          title="Atención del Mesero"
          inputName="atencion-mesero"
          setValue={ atencionMesero => setAtencionMesero(atencionMesero)}
          onClick={() => scrollHandler(componentRapidezServicioRef)}
        >
        </FieldColorSelect5>

        <FieldColorSelect5
          ref={componentRapidezServicioRef}
          inputName="rapidez-servicio"
          number='4'
          title="Rapidez en el Servicio"
          setValue={ rapidezServicio => setRapidezServicio(rapidezServicio)}
          onClick={() => scrollHandler(componentCalidadComidaRef)}
        >
        </FieldColorSelect5>

        <FieldColorSelect5
          ref={componentCalidadComidaRef}
          inputName="calidad-comida"
          number='5'
          title="Sazón y presentación de los platillos"
          setValue={ calidadComida => setCalidadComida(calidadComida) }
          onClick={() => scrollHandler(componentExperienciaGeneralRef)}
        />

        <FieldColorSelect5
          ref={componentExperienciaGeneralRef}
          inputName="experiencia-general"
          number='6'
          title="¿Cual fue tu experiencia general en Mariscos El Rey?"
          setValue={ experienciaGeneral => setExperienciaGeneral(experienciaGeneral) }
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
  
  export default Main