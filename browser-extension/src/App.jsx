import React from 'react';
import {Box} from "@mui/material";
import CommentList from "./components/CommentsBody/CommentList.jsx";
import AddComment from "./components/AddComment/AddComment.jsx"
import CommentHeader from "./components/CommentHeader/CommentHeader.jsx";


export default function App() {
    return (
        <Box sx={{ 
            padding: 2, 
            display: "flex", 
            flexDirection: "column", 
            gap: 2, 
            backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.9)' : 'rgba(239,227,204,0.47)', 
            borderRadius: 2 
        }}>
            <CommentHeader/>
            <AddComment/>
            <CommentList/>
        </Box>
    );
}
