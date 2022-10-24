import React, { useEffect, useState } from 'react'
import { TextField, FormControl, FormLabel, FormControlLabel, Checkbox, RadioGroup, Radio, Slider, Select, MenuItem, InputLabel } from '@mui/material'
import { Typography } from '@mui/material'

const PollField = ( {
    inputId,
    type,
    name,
    title,
    required,
    checkOptions,
    radioOptions,
    selectOptions,
    sliderMin,
    sliderMax,
    sliderDefault,
    sliderStep
} ) => {

    const [ fieldData, setFieldData ] = useState([])

    // The following functions are different strategies to update the fieldData state depending on the input type.

    // Input Type: Text
    const setDataText = ( event ) => {
        setFieldData( [
            { name: name, value: event.target.value }
        ] )
    }

    // Input Type: CheckBoxGroup
    const setDataCheckBoxGroup = ( event, option ) => {
        if ( event.target.checked ) {
            setFieldData( current =>
                current.map( obj =>  {
                    if ( obj.name === option.name ) {
                        return { ...obj, value: true }
                    }
                    return obj
                } )
            )
        } else {
            setFieldData( current =>
                current.map( obj =>  {
                    if ( obj.name === option.name ) {
                        return { ...obj, value: false }
                    }
                    return obj
                } )
            )
        }
    }

    // Input Type: RadioGroup
    const setDataRadioGroup = ( event ) => {
        //console.dir( event )
        setFieldData( [ { name: title, value: event.target.defaultValue } ] )
    }

    // Input Type: Slider
    const setDataSlider = () => {
        // Pending Implementation
    }

    // Input Type: OptionSelect
    const setDataOptionSelect = () => {
        // Pending implementation
    }

    // Input Type: Texarea
    const setDataTextArea = () => {
        // Pending implementation
    }

    // Input Type: Number
    const setDataNumber = () => {
        // Pending implementation
    }

    // Input Type: Email
    const setDataEmail = () => {
        // Pending implementation
    }




    // The Input change handler. It calls a different strategy to update the state depending on the input type
    const handleChange = ( type, event, option ) => {
        
        switch ( type ) {
            case 'checkbox-group':
                setDataCheckBoxGroup( event, option )
                break

            case 'text':
                setDataText( event )
                break

            case 'radio-group':
                setDataRadioGroup( event )
                break

            case 'slider':
                setDataSlider( event )
                break

            case 'option-select':
                setDataOptionSelect( event )
                break

            case 'textarea':
                setDataTextArea( event )
                break

            case 'number':
                setDataNumber( event )
                break

            case 'email':
                setDataEmail( event )
                break

        }
        

    }

    useEffect( () => {

        const setStartingValues = async () => {
            if ( type === 'checkbox-group' ) {
                setFieldData( checkOptions )
            }

            if ( type === 'radio-group' ) {
                setFieldData( [ { name: title, value: 'Muy Satisfecho' } ] )
                let test = [ { name: title, value: 'Muy Satisfecho' } ]
                console.log( test[0].value )
            }
        }

        setStartingValues().catch( console.error )
        
    }, [] )

    switch ( type ) {
        case 'text':
            return (
                <>
                    <TextField
                        id={ inputId }
                        label={ title }
                        variant={ `filled` }
                        required={ required }
                        onChange={ event => {
                            handleChange( type, event )
                        } }
                    />
                </>
                
            )

        case 'checkbox-group':            
            return (
                <FormControl>
                {
                    checkOptions.length >= 1 &&
                    checkOptions.map( ( option, index ) => (
                        <FormControlLabel
                            key={ index }
                            control={ <Checkbox /> }
                            label={ option.name }
                            onChange={ event => { handleChange( type, event, option ) } }
                        />
                    ) )                   
                }
                </FormControl>
            )

        case 'radio-group':
            return(
                <FormControl>
                    <FormLabel id={ inputId }>{ title }</FormLabel>
                    <RadioGroup value={ fieldData.length >= 1 ? fieldData[0].value : 'Muy satisfecho' } onChange={ event => { handleChange( type, event, title ) } }>
                    {
                        radioOptions.length >= 1 &&
                        radioOptions.map( ( option, index ) => (
                            <FormControlLabel
                                key={ index }
                                value={ option.name }
                                control={ <Radio /> }
                                label={ option.name }
                            />
                        ) )
                    }
                    </RadioGroup>
                </FormControl>
            )

        case 'slider':
            return(
                <>
                    <Typography variant='h5' component={ `h5` } >{ title }</Typography>
                    <Slider
                        defaultValue={ sliderDefault }
                        marks
                        min={ sliderMin }
                        max={ sliderMax }
                        step={ sliderStep }
                    />
                </>
                
            )

        case 'option-select':
            return (
                <>
                    <Typography variant='h5' component={ `h5` } >{ title }</Typography>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Selecciona</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ inputId }
                            label={ name }
                            //onChange={handleChange}
                        >
                        {
                            selectOptions.length >= 1 &&
                            selectOptions.map( ( option, index ) => (
                                <MenuItem key={ index } value={ option.value }>{ option.name }</MenuItem>
                            ) )  
                        }                            
                        </Select>
                    </FormControl>
                    
                    
                </>
            )

        case 'form-subtitle':
            return(
                <Typography variant='h6' component={ `h6` } >{ title }</Typography>
            )
    }

}



export default PollField