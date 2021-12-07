import React, { useState, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from './components/Question/Question'
import CustomerData from './components/CustomerData/CustomerData'
import Form from 'react-bootstrap/Form'
import FieldSelectMeseros from './components/FieldSelectMeseros/FieldSelectMeseros'
import FieldColorSelect from './components/FieldColorSelect/FieldColorSelect'

function App() {

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

  // Validation states
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
   * Form Data object
   */
  const formData = {
    mesero: nombreMesero,
    frecuenciaVisita: frecuenciaVisita,
    atencionMesero: atencionMesero,
    rapidezServicio: rapidezServicio,
    calidadComida: calidadComida,
    experienciaGeneral: experienciaGeneral,
    clienteNombre: clienteNombre,
    clienteEmail: clienteEmail,
    clienteTelefono: clienteTelefono,
  }

  /**
   * Handler for the form submission.
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    if ( validationClienteNombre && validationClienteEmail && validationClienteTelefono ) {
      console.log(formData)
      console.log("Datos enviados.")
    } else {
      console.log(formData)
      console.log("Datos inválidos.")
    }
    
  }

  /** Event Handlers */
  const handleChangeAtencionMesero = (event) => setAtencionMesero(event.target.value)
  const handleChangeRapidezServicio = (event) => setRapidezServicio(event.target.value)
  const handleChangeCalidadComida = (event) => setCalidadComida(event.target.value)
  const handleChangeExperienciaGeneral = (event) => setExperienciaGeneral(event.target.value)


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
          setNombreMesero={ nombreMesero => setNombreMesero(nombreMesero) }
          scrollHandler={ scrollHandler }
        />

        <FieldColorSelect
          ref={componentFrecuenciaVisitaRef}
          title="¿Cada cuándo nos visitas?"
          inputName="frecuencia-visita"
          setFrecuenciaVisita={ frecuenciaVisita => setFrecuenciaVisita(frecuenciaVisita) }
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