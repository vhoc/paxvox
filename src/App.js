import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main'
import MainDelivery from './pages/MainDelivery'
//import LoginForm from './components/LoginForm/LoginForm'
//import { AuthProvider } from './AuthContext'

export const AuthContext = React.createContext()

/**
 * DISCLAIMER:
 * This app uses a rather primitive authentication system.
 * This is a learning project. I know for a fact that there must be a lot better and proper ways
 * to do all the things done here.
 * 
 * I set up a Context to handle user authentication.
 * The app starts at the LoginForm component on route "/"
 * and redirects to "/main" on successful authentication.
 */
const App = () => {

  return (

    <div className="App">
        <Routes>
          <Route exact path='/mariscoselrey/obregon' element={ <Main sucursal={1} /> }/>
          <Route exact path='/mariscoselrey/guaymas' element={ <Main sucursal={2} /> }/>
          <Route exact path='/mariscoselrey/hermosillo' element={ <Main sucursal={3} /> }/>
          <Route exact path='/mariscoselrey/domicilio' element={ <MainDelivery sucursal={4} /> }/>
        </Routes>
    </div>

  )
  
}

export default App