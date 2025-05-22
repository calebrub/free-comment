import React from 'react'
import {Button} from "@mui/material";

export default function CommentButton({saveComment}){
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={saveComment?.()}
            sx={{
                textTransform: "none",
                borderRadius: '24px',
                '&.MuiButton-containedPrimary': {
                    backgroundColor: '#1976d2',
                    '&:hover, &:focus, &:active': { backgroundColor: '#0b5ed7' },
                }
            }}
        >
            Comment
        </Button>
    )
}