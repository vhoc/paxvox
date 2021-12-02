import React, { useRef } from 'react'
import './App.css'
import Question from './components/Question/Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import Selector from './components/Selector/Selector'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaTelegramPlane } from "react-icons/fa"

function App() {
  
  
  const questionNombreMeseroRef = useRef()
  const questionFrecuenciaVisitaRef = useRef()
  const questionAtencionMeseroRef = useRef()
  const questionRapidezServicioRef = useRef()
  const questionCalidadComidaRef = useRef()
  const questionExperienciaGeneralRef = useRef()
  const d1 = useRef()
  const campoNombre = useRef()
  const campoEmail = useRef()
  const campoTelefono = useRef()

  const handleSubmit = ( event ) => {
    event.preventDefault()
    const enteredNombreMesero = questionNombreMeseroRef.current.value
    const enteredFrecuenciaVisita = questionFrecuenciaVisitaRef.current.value
    const enteredAtencionMesero = questionAtencionMeseroRef.current.value
    const enteredRapidezServicio = questionRapidezServicioRef.current.value
    const enteredCalidadComida = questionCalidadComidaRef.current.value
    const enteredExperienciaGeneral = questionExperienciaGeneralRef.current.value
    const enteredNombre = campoNombre.current.value
    const enteredEmail = campoEmail.current.value
    const enteredTelefono = campoTelefono.current.value

    const formData = {
      mesero: enteredNombreMesero,
      frecuenciaVisita: enteredFrecuenciaVisita,
      atencionMesero: enteredAtencionMesero,
      rapidezServicio: enteredRapidezServicio,
      calidadComida: enteredCalidadComida,
      experienciaGeneral: enteredExperienciaGeneral,
      nombreCliente: enteredNombre,
      emailCliente: enteredEmail,
      telefonoCliente: enteredTelefono,
    }

    console.log( formData )
  }

  const scrollHandler = ref => {
    window.scrollTo({
      behaviour: "smooth",
      top: ref.current.offsetTop
    })
  }


  return (

    <div className="App">

      <Form className="d-flex flex-column align-items-center" onSubmit={ handleSubmit }>
      
        <Selector
          ref={questionNombreMeseroRef}
          inputName="nombre-mesero"
          nextId="#frecuencia-visita"
          title="¿Cómo se llama tu mesero(a)?"
          onSelect={ () => scrollHandler( questionFrecuenciaVisitaRef ) }
          onChange={  }
        />
      
        <Question
          ref={questionFrecuenciaVisitaRef}
          inputName="frecuencia-visita"
          nextId="#atencion-mesero"
          title="¿Qué tan seguido nos visitas?"
          onClick={ () => scrollHandler( questionAtencionMeseroRef ) }
        />
      
        <Question
          ref={questionAtencionMeseroRef}
          inputName="atencion-mesero"
          nextId="#rapidez-servicio"
          title="Atención del Mesero"
          onClick={ () => scrollHandler( questionRapidezServicioRef ) }
        />
      
        <Question
          ref={questionRapidezServicioRef}
          inputName="rapidez-servicio"
          nextId="#calidad-comida"
          title="Rapidez en el Servicio"
          onClick={ () => scrollHandler( questionCalidadComidaRef ) }
        />
      
        <Question
          ref={questionCalidadComidaRef}
          inputName="calidad-comida"
          nextId="#experiencia-general"
          title="Sabor y Frescura de la Comida"
          onClick={ () => scrollHandler( questionExperienciaGeneralRef ) }
        />
      
        <Question
          ref={questionExperienciaGeneralRef}
          inputName="experiencia-general"
          nextId="#datos-cliente"
          title="¿Cual fue tu experiencia general en Mariscos El Rey?"
          onClick={ () => scrollHandler( d1 ) }
        />
      
        <div id="datos-cliente" className="datosClienteWrapper" ref={d1}>
          <h1>¿Puedes contarnos un poco de ti?</h1>
          <h3>Es opcional &#128521;</h3>
          
          {/* Nombre */}
          <Form.Group className="mb-3 col-10 col-sm-8" controlId="formBasicText">
              <Form.Control type="text" placeholder="Nombre" name="nombre" ref={ campoNombre }/>
          </Form.Group>

          {/* E-mail */}
          <Form.Group className="mb-3 col-10 col-sm-8" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Correo electrónico" name="email" ref={ campoEmail } />
          </Form.Group>

          {/* Teléfono */}
          <Form.Group className="col-10 col-sm-8" controlId="formBasicPhone">
              <Form.Control type="tel" placeholder="Número telefónico" name="telefono" ref={ campoTelefono }/>
          </Form.Group>

          <small className="mt-1 text-white">* Al poner tus datos aceptas recibir descuentos, promociones y noticias en tu correo o teléfono.</small>

          <Button variant="primary" size="lg" className="buttonSend" type="submit"><FaTelegramPlane/> Finalizar</Button>

        </div>
        
      </Form>

    </div>
  )
}

export default App

