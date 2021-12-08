import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm/LoginForm'
import Question from './components/Question/Question'
import CustomerData from './components/CustomerData/CustomerData'
import Form from 'react-bootstrap/Form'
import FieldSelectMeseros from './components/FieldSelectMeseros/FieldSelectMeseros'
import FieldColorSelect from './components/FieldColorSelect/FieldColorSelect'
import Swal from 'sweetalert2'

function App() {

  /**
   * States
   */
  const [bearerToken, setBearerToken] = useState('')

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

  /**
   * Handler for the form submission.
   * @param {*} event
   */
  const handleSubmit = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type':'application/json',
        'Authorization':'Bearer '
      }),
      body: JSON.stringify(formData)
    }

    event.preventDefault()

    // Check all questions have been rated.
    if( nombreMesero === '' || frecuenciaVisita === '' || atencionMesero === '' || rapidezServicio === '' || calidadComida === '' || experienciaGeneral === '' ) {
      Swal.fire("Error", `No has calificado todos los criterios.`, "warning")
      return
    }

    // Check all validation states to be true.
    if ( validationClienteNombre && validationClienteEmail && validationClienteTelefono ) {
      fetch('https://paxvox.waxy.app/api/submissions', requestOptions)
      .then(response => {
        if (response.status !== 201) {
          Swal.fire("Error",response.statusText, "warning" )
        } else {
          Swal.fire("¡Gracias!","Recibimos tu respuesta. ¡Gracias por tu ayuda!", "success" )
          response.json()
        }
      })
      .catch(error => {
        Swal.fire("Error", `No se pudo realizar el envío de las respuestas. (${error})`, "error")
      })
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

  return (
    <div className="App">

      <Form
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

    </div>
  )
}

export default App