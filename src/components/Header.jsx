import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import React from 'react'
const Header = () => {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'white'}}>
                <Toolbar>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'black'}}>
                    GDHelper
                </Typography>
                
                </Toolbar>
            </AppBar>
        </Box>
  )
}

export default Header