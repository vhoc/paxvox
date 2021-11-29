import React, { useRef } from 'react'
import './App.css'
import Question from './components/Question/Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatosCliente from './components/DatosCliente/DatosCliente'
import Selector from './components/Selector/Selector'
import Form from 'react-bootstrap/Form'

function App() {

  const s1 = useRef()
  const q1 = useRef()
  const q2 = useRef()
  const q3 = useRef()
  const q4 = useRef()
  const q5 = useRef()
  const d1 = useRef()

  const scrollHandler = ref => {
    window.scrollTo({
      behaviour: "smooth",
      top: ref.current.offsetTop
    })
  }

  return (

    <div className="App">

      <Form className="d-flex flex-column align-items-center">
      
        <Selector
          ref={s1}
          inputName="nombre-mesero"
          nextId="#frecuencia-visita"
          title="¿Cómo se llama tu mesero(a)?"
          onSelect={ () => scrollHandler( q1 ) }
        />
      
        <Question
          ref={q1}
          inputName="frecuencia-visita"
          nextId="#atencion-mesero"
          title="¿Qué tan seguido nos visitas?"
          onClick={() => scrollHandler( q2 ) }
        />
      
        <Question
          ref={q2}
          inputName="atencion-mesero"
          nextId="#rapidez-servicio"
          title="Atención del Mesero"
          onClick={() => scrollHandler( q3 ) }
        />
      
        <Question
          ref={q3}
          inputName="rapidez-servicio"
          nextId="#calidad-comida"
          title="Rapidez en el Servicio"
          onClick={() => scrollHandler( q4 ) }
        />
      
        <Question
          ref={q4}
          inputName="calidad-comida"
          nextId="#experiencia-general"
          title="Sabor y Frescura de la Comida"
          onClick={() => scrollHandler( q5 ) }
        />
      
        <Question
          ref={q5}
          inputName="experiencia-general"
          nextId="#datos-cliente"
          title="¿Cual fue tu experiencia general en Mariscos El Rey?"
          onClick={() => scrollHandler( d1 ) }
        />
      
        <DatosCliente ref={d1}/>
        
      </Form>

    </div>
  )
}

export default App
