import React, { useState } from 'react'
import './App.css'
import Question from './components/Question/Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatosCliente from './components/DatosCliente/DatosCliente'
import Selector from './components/Selector/Selector'
import Form from 'react-bootstrap/Form'

function App() {
  const [activeInput, setActiveInput] = useState(1)

  return (

    <div className="App">

      <Form className="d-flex flex-column align-items-center">

        {activeInput === 1 && (
          <Selector
            key="s1"
            inputName="nombre-mesero"
            nextId="#frecuencia-visita"
            title="¿Cómo se llama tu mesero(a)?"
            onSelect={() => setActiveInput(2)}
          />
        )}

        {activeInput === 2 && (
          <Question
            key="q1"
            inputName="frecuencia-visita"
            nextId="#atencion-mesero"
            title="¿Qué tan seguido nos visitas?"
            onClick={() => setActiveInput(3)}
          />
        )}

        {activeInput === 3 && (
          <Question
            key="q2"
            inputName="atencion-mesero"
            nextId="#rapidez-servicio"
            title="Atención del Mesero"
            onClick={() => setActiveInput(4)}
          />
        )}

        {activeInput === 4 && (
          <Question
            key="q3"
            inputName="rapidez-servicio"
            nextId="#calidad-comida"
            title="Rapidez en el Servicio"
            onClick={() => setActiveInput(5)}
          />
        )}

        {activeInput === 5 && (
          <Question
            key="q4"
            inputName="calidad-comida"
            nextId="#experiencia-general"
            title="Sabor y Frescura de la Comida"
            onClick={() => setActiveInput(6)}
          />
        )}

        {activeInput === 6 && (
          <Question
            key="q5"
            inputName="experiencia-general"
            nextId="#datos-cliente"
            title="¿Cual fue tu experiencia general en Mariscos El Rey?"
            onClick={() => setActiveInput(7)}
          />
        )}

        {activeInput === 7 && (
          <DatosCliente />
        )}
        
      </Form>

    </div>
  )
}

export default App
