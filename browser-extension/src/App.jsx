import React from 'react';
import {Box} from "@mui/material";
import CommentList from "./components/CommentsBody/CommentList.jsx";
import AddComment from "./components/AddComment/AddComment.jsx"


export default function App() {
    return (
        <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2, backgroundColor: '#efe3cc', borderRadius: 2 }}>
            <AddComment/>
            <CommentList/>
        </Box>
    );
}