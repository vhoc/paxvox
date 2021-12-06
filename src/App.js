import React, { useState, useRef } from 'react'
import './App.css'
import Question from './components/Question/Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaTelegramPlane } from 'react-icons/fa'
import FieldSelectMeseros from './components/FieldSelectMeseros/FieldSelectMeseros'

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
  const questionNombreMeseroRef = useRef()
  const questionFrecuenciaVisitaRef = useRef()
  const questionAtencionMeseroRef = useRef()
  const questionRapidezServicioRef = useRef()
  const questionCalidadComidaRef = useRef()
  const questionExperienciaGeneralRef = useRef()

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

  /**
   * Get a list of waiters (meseros) from our API
   * and save them into their State.
   
  useEffect(() => {
    fetch(`https://paxvox.waxy.app/api/waiters/1`, {
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
      })
  }, [])*/

  return (
    <div className="App">

      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <FieldSelectMeseros
          title="Selecciona tu mesero"
          forwardedRef={questionNombreMeseroRef}
          forwardedNextRef={componentFrecuenciaVisitaRef}
          locationId="1"
          setNombreMesero={ nombreMesero => setNombreMesero(nombreMesero) }
          handleChildScroll={ handleChildScroll }
        />

        <div
          id="frecuencia-visita"
          className="questionWrapper"
          ref={componentFrecuenciaVisitaRef}
        >
          <Question
            ref={questionFrecuenciaVisitaRef}
            inputName="frecuencia-visita"
            nextId="#atencion-mesero"
            title="¿Qué tan seguido nos visitas?"
            value={frecuenciaVisita}
            onChangeValue={handleChangeFrecuenciaVisita}
            onClick={(e) => {
              scrollHandler(componentAtencionMeseroRef)
            }}
          />
        </div>

        <div
          id="atencion-mesero"
          className="questionWrapper"
          ref={componentAtencionMeseroRef}
        >
          <Question
            ref={questionAtencionMeseroRef}
            inputName="atencion-mesero"
            nextId="#rapidez-servicio"
            title="Atención del Mesero"
            value={atencionMesero}
            onChangeValue={handleChangeAtencionMesero}
            onClick={() => scrollHandler(componentRapidezServicioRef)}
          />
        </div>

        <div
          id="rapidez-servicio"
          className="questionWrapper"
          ref={componentRapidezServicioRef}
        >
          <Question
            ref={questionRapidezServicioRef}
            inputName="rapidez-servicio"
            nextId="#calidad-comida"
            title="Rapidez en el Servicio"
            value={rapidezServicio}
            onChangeValue={handleChangeRapidezServicio}
            onClick={() => scrollHandler(componentCalidadComidaRef)}
          />
        </div>

        <div
          id="calidad-comida"
          className="questionWrapper"
          ref={componentCalidadComidaRef}
        >
          <Question
            ref={questionCalidadComidaRef}
            inputName="calidad-comida"
            nextId="#experiencia-general"
            title="Sabor y Frescura de la Comida"
            value={calidadComida}
            onChangeValue={handleChangeCalidadComida}
            onClick={() => scrollHandler(componentExperienciaGeneralRef)}
          />
        </div>

        <div
          id="experiencia-general"
          className="questionWrapper"
          ref={componentExperienciaGeneralRef}
        >
          <Question
            ref={questionExperienciaGeneralRef}
            inputName="experiencia-general"
            nextId="#datos-cliente"
            title="¿Cual fue tu experiencia general en Mariscos El Rey?"
            value={experienciaGeneral}
            onChangeValue={handleChangeExperienciaGeneral}
            onClick={() => scrollHandler(d1)}
          />
        </div>

        <div id="datos-cliente" className="datosClienteWrapper" ref={d1}>
          <h1>¿Puedes contarnos un poco de ti?</h1>
          <h3>Es opcional &#128521;</h3>

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
