import { Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import axios from "axios"
import PollField from "../components/PollField"

const Poll = ( { sucursal } ) => {

    const [ location, setLocation ] = useState({
        id: 0,
        name: '',
    })

    const [ poll, setPoll ] = useState({
            id: 1,
            locationId: 1,
            name: "salida-obregon",
            title: "Mariscos El Rey Obregón - Encuesta de Salida",
            notifyEmails: "vhocar@gmail.com,test-encuestas@mariscoselrey.com",
            fields: [
                {
                    inputId: "nombre-empleado",
                    type: "text",
                    checkOptions: [],
                    radioOptions: [],
                    name: "Nombre del empleado",
                    title: "Nombre (opcional)",
                    required: false,
                },
                {
                    inputId: "motivos-separacion",
                    type: "checkbox-group",
                    checkOptions: [
                        { name: "Me ofrecen un puesto mejor", value: false, },
                        { name: "Me ofrecen un sueldo mejor", value: false, },
                        { name: "Me ofrecen mayores responsabilidades", value: false, },
                        { name: "Me ofrecen un horario mejor", value: false, },
                        { name: "Necesito un cambio", value: false, },
                        { name: "Motivos familiares", value: false, },
                        { name: "Motivos personales", value: false, },
                        { name: "Me cambio de residencia", value: false, },
                        { name: "Vuelvo a estudiar", value: false, },
                        { name: "Simplemente dejo de trabajar", value: false, },
                        { name: "Otro", value: false, },
                    ],
                    radioOptions: [],
                    name: "Motivo(s) de separación",
                    title: "¿Cuál o cuáles son sus motivos para dejar Mariscos El Rey?",
                    required: true,
                },
                {
                    inputId: "",
                    type: "form-subtitle",
                    checkOptions: [],
                    radioOptions: [],
                    name: "",
                    title: "¿Cual es su grado de satisfacción con los siguientes aspectos de la compañía y sobre su puesto de trabajo en ella?",
                    required: true,
                },
                {
                    inputId: "satisfaccion-salario",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción en Salario",
                    title: "Salario",
                    required: true,
                },
                {
                    inputId: "satisfaccion-ambientetrabajo",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción en Ambiente de Trabajo",
                    title: "Ambiente de trabajo",
                    required: true,
                },
                {
                    inputId: "satisfaccion-cargatrabajo",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción en Carga de Trabajo",
                    title: "Carga de Trabajo",
                    required: true,
                },
                {
                    inputId: "relacion-companeros",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción en la Relación con Compañeros",
                    title: "Relación con los compañeros",
                    required: true,
                },
                {
                    inputId: "relacion-jefes",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción en la Relación con los Jefes",
                    title: "Relación con los jefes",
                    required: true,
                },
                {
                    inputId: "satisfaccion-reconocimiento",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción con el Reconocimiento Obtenido",
                    title: "Reconocimiento obtenido",
                    required: true,
                },
                {
                    inputId: "trabajo-equipo",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Muy satisfecho", value: false },
                        { name: "Satisfecho", value: false },
                        { name: "Insatisfecho", value: false },
                        { name: "Muy insatisfecho", value: false },
                    ],
                    name: "Satisfacción en Trabajo en Equipo",
                    title: "Trabajo en equipo",
                    required: true,
                },
                {
                    inputId: "calificacion-general",
                    type: "slider",
                    checkOptions: [],
                    radioOptions: [],
                    sliderMin: 1,
                    sliderMax: 10,
                    sliderDefault: 5,
                    sliderStep: 1,
                    name: "Calificación General a la Empresa",
                    title: "En escala del 1 al 10, ¿qué calificación general le darías a la empresa?",
                    required: true,
                },
                {
                    inputId: "recomendacion-otros",
                    type: "radio-group",
                    checkOptions: [],
                    radioOptions: [
                        { name: "Sí", value: false },
                        { name: "No", value: false },
                    ],
                    name: "Recomendación a otros",
                    title: "¿Recomendarías a algún familiar, amigo o conocido a formar parte del equipo de Mariscos El Rey?",
                    required: true,
                },
                {
                    inputId: "rango-edad",
                    type: "option-select",
                    checkOptions: [],
                    radioOptions: [],
                    selectOptions: [
                        { name: "18-30", value: "18-30" },
                        { name: "31-40", value: "31-40" },
                        { name: "41-50", value: "41-50" },
                        { name: "51-60", value: "51-60" },
                        { name: "61-70", value: "61-70" },
                        { name: "Más de 70", value: "Más de 70" },
                    ],
                    name: "Rango de Edad",
                    title: "¿En qué rango de edad te encuentas?",
                    required: false,
                }
            ],
    })

    useEffect( () => {
        const getLocation = async () => {
          try {
            const location = await axios.get( `https://paxvox.waxy.app/api/location/${ sucursal }` )
            setLocation( location.data )
          } catch ( error ) {
            console.warn( error )
          }
        }        
        getLocation()    
    }, [sucursal] )

    return(
        <div className="d-flex flex-column align-items-center pt-3 gap-3">
            <Typography variant={`h3`} component={`h3`}>{ location && location.name }</Typography>
            <Typography variant={`h5`} component={`h5`}>{ location && `Encuesta de Salida` }</Typography>
            <Typography className='col-10 col-md-8 col-xl-6' variant={`body`} component={`p`}>
                Por favor, dedique unos minutos a completar esta encuesta.
                La información obtenida servirá para entender los motivos de su baja en la empresa.
                Sus respuestas serán tratadas de forma CONFIDENCIAL Y ANÓNIMA y serán analizadas de forma agregada.
            </Typography>

            {
                poll.fields.length >= 1 &&
                    poll.fields.map( ( field, index ) => 
                        (<PollField
                            key={ index }
                            inputId={ field.inputId }
                            type={ field.type }
                            checkOptions={ field.checkOptions }
                            radioOptions={ field.radioOptions }
                            selectOptions={ field.selectOptions }
                            sliderMin={ field.sliderMin }
                            sliderMax={ field.sliderMax }
                            sliderDefault={ field.sliderDefault }
                            sliderStep={ field.sliderStep }
                            name={ field.name }
                            title={ field.title }
                            required={ field.required }
                        />)
                    )
            }

        </div>
    )

}

export default Poll