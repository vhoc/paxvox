/**
 * Packages
 */
const PORT = 8000
const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.get('/', (req,res) => {
    res.json('hi')
})

app.get('/news', (req,res) => {

    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': process.env.API_KEY
        }
    }

    fetch('https://paxvox.waxy.app/api/submissions', requestOptions)
    .then(response => {
    if (response.status !== 201) {
        Swal.fire("Error",response.statusText, "warning" )
    } else {
        Swal.fire("¡Gracias!","Recibimos tu respuesta. ¡Gracias por tu ayuda!", "success" )
        response.json()
    }
    })
    .catch(error => {
    Swal.fire("Error", `No se pudo realizar el envío de las respuestas. (${error})`, "error")
    })

})



app.listen(8000, () => console.log(`Server is running on port ${PORT}`))