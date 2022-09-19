import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  return (
    <AppBar position = 'static'>
        <Toolbar>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <Typography>
                Live Score
            </Typography>
        </Toolbar>

        </AppBar>

  );
};

export default Navbar