import React, {useState} from "react";
import {Box, TextField} from "@mui/material";
import CustomButton from "../core/CustomButton.jsx";

export default function AddComment({saveComment, }){
    const [commentMessage, setCommentMessage] = useState('')
    return (
        <Box>


            <TextField
                value={commentMessage}
                onChange={event => setCommentMessage(event.target.value)}
                variant={"standard"}
                placeholder={"Add a comment"}
                multiline
                maxRows={4}
                fullWidth
                sx={{
                    '& .MuiInputBase-input': { // Target the input element itself
                        fontSize: '1.4rem',    // Your desired font size
                    },
                }}
            />



            <Box mt={2} width={"100%"} display={"flex"} justifyContent={"flex-end"} gap={2}>
                <CustomButton
                    text={"Cancel"}
                    variant="text"
                    size="large"
                    sx={{
                        textTransform: "none",
                        fontSize: '1.4rem',
                        borderRadius: '24px',
                        '&.MuiButton-containedPrimary': {
                            backgroundColor: theme => theme.palette.primary.main,
                            '&:hover, &:focus, &:active': {
                                backgroundColor: theme => theme.palette.primary.dark || '#0b5ed7',
                            },
                        }
                    }}
                    onClick={() => {
                        setCommentMessage('')
                    }}
                />
                <CustomButton
                    text={"Comment"}
                    disabled={!commentMessage}
                    size="large"
                    sx={{
                        textTransform: "none",
                        borderRadius: '24px',
                        fontSize: '1.4rem',
                        '&.MuiButton-containedPrimary': {
                            backgroundColor: theme => theme.palette.primary.main,
                            '&:hover, &:focus, &:active': {
                                backgroundColor: theme => theme.palette.primary.dark || '#0b5ed7',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: theme => theme.palette.action.disabledBackground,
                                color: theme => theme.palette.action.disabled,
                            },
                        }
                    }}
                    onClick={saveComment}
                />
            </Box>
        </Box>
    )
}