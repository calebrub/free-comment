import React from 'react';
import {Box, Typography} from "@mui/material";
import SortMenu from "../core/SortMenu.jsx";

export default function CommentHeader({commentNumber = 165}){

    return(
        <Box display={"flex"} alignItems={"center"} gap={2}>
            <Typography variant="h4" fontWeight={"bold"}>
                {commentNumber} Comment{commentNumber !== 1 && 's'}
            </Typography>

            <SortMenu/>
        </Box>
    )
}