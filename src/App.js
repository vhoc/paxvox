import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main'
import LoginForm from './components/LoginForm/LoginForm'

const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <LoginForm/> }/>
        <Route exact path='/main' element={ <Main /> }/>
      </Routes>

    </div>
  )
}

export default App