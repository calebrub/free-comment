import React from 'react'
import {Box, Typography} from "@mui/material";

export default function Comment({text}){
    return (
        <Box>
            <Typography>
                {text}
            </Typography>
        </Box>
    )
}