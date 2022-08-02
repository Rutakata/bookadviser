import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "40px", }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Manga Adviser
          </Typography>
          <Button color="inherit"><NavLink to="/random">Random</NavLink></Button>
          <Button color="inherit"><NavLink to="/main">Home</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;