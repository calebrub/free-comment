import React, {useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import CommentButton from "../core/CommentButton.jsx";

export default function AddComment({saveComment, }){
    const [commentMessage, setCommentMessage] = useState('')
    return (
        <Box>
            <TextField
                value={commentMessage}
                onChange={event => setCommentMessage(event.target.value)}
                variant={"standard"}
                multiline
                maxRows={4}
                fullWidth
            />
            <Box mt={2} width={"100%"} display={"flex"} justifyContent={"flex-end"} >
                <CommentButton
                    saveComment={saveComment}
                />
            </Box>
        </Box>
    )
}