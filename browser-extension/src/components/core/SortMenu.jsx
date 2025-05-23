import React, { useState } from 'react';
import {Box, Button, Menu, MenuItem, Typography} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

export default function SortMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [selectedOption, setSelectedOption] = useState('');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        if (option) setSelectedOption(option);
        setAnchorEl(null);
    };

    return (
        <Box>

            <Button
                variant="text"
                onClick={handleClick}
                sx={{ textTransform: 'none', fontSize: '1.4rem',}}
                startIcon={<SortIcon />}
                size="large"
            >
                Sort By
            </Button>
            <Menu
                variant="selectedMenu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                sx={{p: 4, fontSize: '1.4rem'}}

            >
                <MenuItem sx={{fontSize: '1.4rem'}} onClick={() => handleClose('Top comments')}>Top comments</MenuItem>
                <MenuItem sx={{fontSize: '1.4rem'}} onClick={() => handleClose('Newest first')}>Newest first</MenuItem>
            </Menu>
        </Box>
    );
}