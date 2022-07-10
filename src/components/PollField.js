import React from 'react'
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

    switch ( type ) {
        case 'text':
            return (
                <>
                    <TextField
                        id={ inputId }
                        label={ title }
                        variant={ `filled` }
                        required={ required }
                    />
                </>
                
            )

        case 'checkbox-group':
            return (
                <FormControl>
                {
                    checkOptions.length >= 1 &&
                    checkOptions.map( ( option, index ) => (
                        <FormControlLabel key={ index } control={ <Checkbox /> } label={ option.name } />
                    ) )                   
                }
                </FormControl>
            )

        case 'radio-group':
            return(
                <FormControl>
                    <FormLabel id={ inputId }>{ title }</FormLabel>
                    <RadioGroup>
                    {
                        radioOptions.length >= 1 &&
                        radioOptions.map( ( option, index ) => (
                            <FormControlLabel key={ index } control={ <Radio /> } label={ option.name } />
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