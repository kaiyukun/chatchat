import React from 'react';
import TextField from '@material-ui/core/TextField';


const TextInput = () => {
    return (
        <TextField 
            fullWidth={true}
            label={PaymentResponse.label}
            margin={"dense"}
            multiline={PaymentResponse.multiline}
            rows={PaymentResponse.rows}
            value={PaymentResponse.value}
            type={PaymentResponse.type}
            onChange={PaymentResponse.onChange}
        />
    )
}

export default TextInput;