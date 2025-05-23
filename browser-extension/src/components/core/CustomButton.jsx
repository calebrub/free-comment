import React from 'react'
import {Button} from "@mui/material";

export default function CommentButton({saveComment, ...props}){
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={saveComment?.()}
            sx={{
                textTransform: "none",
                borderRadius: '24px',
                '&.MuiButton-containedPrimary': {
                    backgroundColor: theme => theme.palette.primary.main,
                    '&:hover, &:focus, &:active': { 
                        backgroundColor: theme => theme.palette.primary.dark || '#0b5ed7',
                    },
                }
            }}
            {...props}
        >
            Comment
        </Button>
    )
}
