import * as React from 'react'

// import MUI
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from '@mui/material'

// import icons
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

// import pages
const pages = ['Projects', 'Contact']

function NavBar(changePage) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FavoriteBorderRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h5" component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none'}}>
            Hello There ~
          </Typography>

          <MenuItem href="#about" onClick={() => changePage('About')}>About</MenuItem>

          <MenuItem href="#work" onClick={() => changePage('Projects')}>My Projects</MenuItem>

          <MenuItem href="#resume" onClick={() => changePage('Resume')}>Resume</MenuItem>

          <MenuItem href="#contact" onClick={() => changePage('Contact')}>Contact</MenuItem>
        </Toolbar>

      </Container>
    </AppBar>
  )
}

export default NavBar