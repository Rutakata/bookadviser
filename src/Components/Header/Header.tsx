import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "40px", }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Manga Adviser
          </Typography>
          <Button color="inherit">Random</Button>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;