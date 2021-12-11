import React, { useState, useRef } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from './../components/Question/Question'
import CustomerData from './../components/CustomerData/CustomerData'
import Form from 'react-bootstrap/Form'
import FieldSelectMeseros from './../components/FieldSelectMeseros/FieldSelectMeseros'
import FieldColorSelect from './../components/FieldColorSelect/FieldColorSelect'
import Swal from 'sweetalert2'
import axios from 'axios'

const Main = () => {
  

  /**
   * States
   */
  const [nombreMesero, setNombreMesero] = useState('')
  const [frecuenciaVisita, setFrecuenciaVisita] = useState('')
  const [atencionMesero, setAtencionMesero] = useState('')
  const [rapidezServicio, setRapidezServicio] = useState('')
  const [calidadComida, setCalidadComida] = useState('')
  const [experienciaGeneral, setExperienciaGeneral] = useState('')
  const [clienteNombre, setClienteNombre] = useState('No proporcionado')
  const [clienteEmail, setClienteEmail] = useState('No proporcionado')
  const [clienteTelefono, setClienteTelefono] = useState('No proporcionado')

  const [validationClienteNombre, setValidationClienteNombre] = useState(true)
  const [validationClienteEmail, setValidationClienteEmail] = useState(true)
  const [validationClienteTelefono, setValidationClienteTelefono] = useState(true)

  /**
   * References
   */
  const componentFrecuenciaVisitaRef = useRef()
  const componentAtencionMeseroRef = useRef()
  const componentRapidezServicioRef = useRef()
  const componentCalidadComidaRef = useRef()
  const componentExperienciaGeneralRef = useRef()
  const d1 = useRef()

  /**
   * Form Data container object
   */
  const formData = {
    clienteNombre: clienteNombre,
    clienteEmail: clienteEmail,
    clienteTelefono: clienteTelefono,
    responses: {
      mesero: nombreMesero,
      frecuenciaVisita: frecuenciaVisita,
      atencionMesero: atencionMesero,
      rapidezServicio: rapidezServicio,
      calidadComida: calidadComida,
      experienciaGeneral: experienciaGeneral,
    }
  }

  let navigate = useNavigate()

  const submitForm = async (data) => {
    const requestOptions = {
      headers: {
        'Content-Type':'application/json',
        'Authorization':localStorage.getItem('token')
      },
    }

    try {
      await axios.post('https://paxvox.waxy.app/api/submissions', data, requestOptions)
      Swal.fire("¡Gracias!","Recibimos tu respuesta. ¡Gracias por tu ayuda!", "success" )
      navigate('/', {replace: true})
    } catch (exception) {
      console.log(exception);
      switch(exception.response.status) {
        case 401:
          Swal.fire("Error", "Error al enviar las respuestas, es necesario ingresar de nuevo.", "error").then(()=> window.location = "/" )
          break;
        default:
          console.log(`${exception.message}`)
          Swal.fire("Error", `Error desconocido: (${exception.response.data})`, "error")
          break;
      }
    }
    

  }

  /**
   * Handler for the form submission.
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    // Check all questions have been rated.
    if( nombreMesero === '' || frecuenciaVisita === '' || atencionMesero === '' || rapidezServicio === '' || calidadComida === '' || experienciaGeneral === '' ) {
      Swal.fire("Error", `No has calificado todos los criterios.`, "warning")
      return
    }
  
    // Check all validation states to be true.
    if ( validationClienteNombre && validationClienteEmail && validationClienteTelefono ) {
      submitForm(formData)      
    } else {
      Swal.fire("Error", `Verifica que los datos que ingresaste sean correctos`, "error")
    }
    
  }

  /** Event Handlers */
  const handleChangeAtencionMesero = (event) => {
    setAtencionMesero(event.target.value)
  }
  const handleChangeRapidezServicio = (event) => {
    setRapidezServicio(event.target.value)
  }
  const handleChangeCalidadComida = (event) => {
    setCalidadComida(event.target.value)
  }
  const handleChangeExperienciaGeneral = (event) => {
    setExperienciaGeneral(event.target.value)
  }

  /**
   * Handler for the scroll that triggers when a user
   * selects and option.
   */
  const scrollHandler = (ref) => {
    window.scrollTo({
      behaviour: 'smooth',
      top: ref.current.offsetTop,
    })
  }

  // Redirect to login form when no token is found on local storage.
  if ( !localStorage.getItem('token') ) {
    console.log("no token found")
    return <Navigate to="/"/>
  }
  

  return (
      <Form
        id="poll"
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >

        <FieldSelectMeseros
          title="Selecciona tu mesero"
          forwardedNextRef={componentFrecuenciaVisitaRef}
          locationId="1"
          setNombreMesero={ nombreMesero => setNombreMesero(nombreMesero)}
          scrollHandler={ scrollHandler }
        />

        <FieldColorSelect
          ref={componentFrecuenciaVisitaRef}
          title="¿Cada cuándo nos visitas?"
          inputName="frecuencia-visita"
          setFrecuenciaVisita={ frecuenciaVisita => setFrecuenciaVisita(frecuenciaVisita)}
          onClick={() => scrollHandler(componentAtencionMeseroRef)}
        />

        <Question
          ref={componentAtencionMeseroRef}
          inputName="atencion-mesero"
          nextId="#rapidez-servicio"
          title="Atención del Mesero"
          value={atencionMesero}
          onChangeValue={handleChangeAtencionMesero}
          onClick={() => scrollHandler(componentRapidezServicioRef)}
        />

        <Question
          ref={componentRapidezServicioRef}
          inputName="rapidez-servicio"
          nextId="#calidad-comida"
          title="Rapidez en el Servicio"
          value={rapidezServicio}
          onChangeValue={handleChangeRapidezServicio}
          onClick={() => scrollHandler(componentCalidadComidaRef)}
        />

        <Question
          ref={componentCalidadComidaRef}
          inputName="calidad-comida"
          nextId="#experiencia-general"
          title="Sabor y Frescura de la Comida"
          value={calidadComida}
          onChangeValue={handleChangeCalidadComida}
          onClick={() => scrollHandler(componentExperienciaGeneralRef)}
        />

        <Question
          ref={componentExperienciaGeneralRef}
          inputName="experiencia-general"
          nextId="#datos-cliente"
          title="¿Cual fue tu experiencia general en Mariscos El Rey?"
          value={experienciaGeneral}
          onChangeValue={handleChangeExperienciaGeneral}
          onClick={() => scrollHandler(d1)}
        />

        <CustomerData
          ref={d1}
          inputName="datos-cliente"
          title={ {h1: "¿Puedes contarnos un poco de ti?", h3: "Es opcional 😉" } }
          setClienteNombre={ clienteNombre => setClienteNombre(clienteNombre)}
          setClienteEmail={ clienteEmail => setClienteEmail(clienteEmail)}
          setClienteTelefono={clienteTelefono => setClienteTelefono(clienteTelefono)}
          setValidationClienteNombre={validationClienteNombre => setValidationClienteNombre(validationClienteNombre)}
          setValidationClienteEmail={validationClienteEmail => setValidationClienteEmail(validationClienteEmail)}
          setValidationClienteTelefono={validationClienteTelefono => setValidationClienteTelefono(validationClienteTelefono)}
        />        
      </Form>
    )
  }
  
  export default Main