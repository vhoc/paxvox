import React, { useState, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from './components/Question/Question'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FieldSelectMeseros from './components/FieldSelectMeseros/FieldSelectMeseros'
import { FaTelegramPlane } from 'react-icons/fa'

function App() {

  /**
   * States
   */
  const [nombreMesero, setNombreMesero] = useState(undefined)
  const [frecuenciaVisita, setFrecuenciaVisita] = useState('')
  const [atencionMesero, setAtencionMesero] = useState('')
  const [rapidezServicio, setRapidezServicio] = useState('')
  const [calidadComida, setCalidadComida] = useState('')
  const [experienciaGeneral, setExperienciaGeneral] = useState('')
  const [clienteNombre, setClienteNombre] = useState('')
  const [clienteEmail, setClienteEmail] = useState('')
  const [clienteTelefono, setClienteTelefono] = useState('')

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

    console.log(formData)
  }

  /** Event Handlers */
  const handleChangeFrecuenciaVisita = (event) =>
    setFrecuenciaVisita(event.target.value)
  const handleChangeAtencionMesero = (event) =>
    setAtencionMesero(event.target.value)
  const handleChangeRapidezServicio = (event) =>
    setRapidezServicio(event.target.value)
  const handleChangeCalidadComida = (event) =>
    setCalidadComida(event.target.value)
  const handleChangeExperienciaGeneral = (event) =>
    setExperienciaGeneral(event.target.value)
  const handleChangeClienteNombre = (event) =>
    setClienteNombre(event.target.value)
  const handleChangeClienteEmail = (event) =>
    setClienteEmail(event.target.value)
  const handleChangeClienteTelefono = (event) =>
    setClienteTelefono(event.target.value)

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

  const handleChildScroll = (ref) => {
    window.scrollTo({
      behavior: 'smooth',
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
          handleChildScroll={ handleChildScroll }
        />
        
        <Question
          ref={componentFrecuenciaVisitaRef}
          inputName="frecuencia-visita"
          nextId="#atencion-mesero"
          title="¿Qué tan seguido nos visitas?"
          value={frecuenciaVisita}
          onChangeValue={handleChangeFrecuenciaVisita}
          onClick={(e) => {
            scrollHandler(componentAtencionMeseroRef)
          }}
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

        <div id="datos-cliente" className="datosClienteWrapper" ref={d1}>
          <h1>¿Puedes contarnos un poco de ti?</h1>
          <h3>Es opcional <span role="img" aria-label="guiño">&#128521;</span></h3>

          {/* Nombre */}
          <Form.Group
            className="mb-3 col-10 col-sm-8"
            controlId="formBasicText"
          >
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={handleChangeClienteNombre}
            />
          </Form.Group>

          {/* E-mail */}
          <Form.Group
            className="mb-3 col-10 col-sm-8"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              name="email"
              onChange={handleChangeClienteEmail}
            />
          </Form.Group>

          {/* Teléfono */}
          <Form.Group className="col-10 col-sm-8" controlId="formBasicPhone">
            <Form.Control
              type="tel"
              placeholder="Número telefónico"
              name="telefono"
              onChange={handleChangeClienteTelefono}
            />
          </Form.Group>

          <small className="mt-1 text-white">
            * Al poner tus datos aceptas recibir descuentos, promociones y
            noticias en tu correo o teléfono.
          </small>

          <Button
            variant="primary"
            size="lg"
            className="buttonSend"
            type="submit"
          >
            <FaTelegramPlane /> Finalizar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default App
