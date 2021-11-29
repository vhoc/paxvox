import React, { useRef } from 'react'
import './App.css'
import Question from './components/Question/Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatosCliente from './components/DatosCliente/DatosCliente'
import Selector from './components/Selector/Selector'
import Form from 'react-bootstrap/Form'

function App() {

  const question1Ref = useRef()
  const question2Ref = useRef()
  const question3Ref = useRef()
  const question4Ref = useRef()
  const question5Ref = useRef()

  

  return (
    <div className="App">
      <Form className="d-flex flex-column align-items-center">
        <Selector
          key="s1"
          inputName="nombre-mesero"
          nextId="#frecuencia-visita"
          title="¿Cómo se llama tu mesero(a)?"
        />
        <Question
          key="q1"
          ref={ question1Ref }
          inputName="frecuencia-visita"
          nextId="#atencion-mesero"
          title="¿Qué tan seguido nos visitas?"
        />
        <Question
          key="q2"
          ref={ question2Ref }
          inputName="atencion-mesero"
          nextId="#rapidez-servicio"
          title="Atención del Mesero"
        />
        <Question
          key="q3"
          ref={ question3Ref }
          inputName="rapidez-servicio"
          nextId="#calidad-comida"
          title="Rapidez en el Servicio"
        />
        <Question
          key="q4"
          ref={ question4Ref }
          inputName="calidad-comida"
          nextId="#experiencia-general"
          title="Sabor y Frescura de la Comida"
        />
        <Question
          key="q5"
          ref={ question5Ref }
          inputName="experiencia-general"
          nextId="#datos-cliente"
          title="¿Cual fue tu experiencia general en Mariscos El Rey?"
        />
        <DatosCliente />
      </Form>
    </div>
  )
}

export default App