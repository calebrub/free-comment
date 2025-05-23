import React from 'react'
import {Button} from "@mui/material";

export default function CustomButton({onClick, text, ...props}){
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            {...props}
        >
            {text}
        </Button>
    )
}
