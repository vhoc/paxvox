import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main'
import MainDelivery from './pages/MainDelivery'

export const AuthContext = React.createContext()

const App = () => {

  return (

    <div className="App">
        <Routes>
          <Route exact path='/mariscoselrey/obregon' element={ <Main sucursal={1} /> }/>
          <Route exact path='/mariscoselrey/guaymas' element={ <Main sucursal={2} /> }/>
          <Route exact path='/mariscoselrey/hermosillo' element={ <Main sucursal={3} /> }/>
          <Route exact path='/mariscoselrey/domicilio' element={ <MainDelivery sucursal={4} /> }/>
          <Route exact path='/mariscoselrey/sancarlos' element={ <Main sucursal={5} /> }/>
        </Routes>
    </div>

  )
  
}

export default App