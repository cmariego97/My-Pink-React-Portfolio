import * as React from 'react'
import '../assets/css/styles.css'

// import MUI
import { AppBar, Box, Button, Container, MenuItem, TabScrollButton, Toolbar, Typography } from '@mui/material'

// import icons
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

// import react scroll
import { Link as Scroll } from 'react-scroll';

function NavBar(changePage) {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="navBar">
          <Box sx={{ display: { xs: 'none', md: 'flex' }, m:2 }}>
            <FavoriteBorderRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <FavoriteBorderRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <FavoriteBorderRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Box>
          

          <Box sx={{ display: { xs: 'none', md: 'flex' }, m:2 }}>
            <Scroll to="about-me" smooth={true}>
              <MenuItem>
                <Typography variant="h6" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, letterSpacing: '.3rem' }}>About Me</Typography>
              </MenuItem>
            </Scroll>

            <Scroll to="my-projects" smooth={true}>
              <MenuItem>
                <Typography variant="h6" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, letterSpacing: '.3rem' }}>My Projects</Typography>
              </MenuItem>
            </Scroll>

            <Scroll to="contact-me" smooth={true}>
              <MenuItem>
                <Typography variant="h6" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, letterSpacing: '.3rem' }}>Contact Me</Typography>
              </MenuItem>
            </Scroll>

            <Scroll to="my-resume" smooth={true}>
              <MenuItem>
                <Typography variant="h6" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, letterSpacing: '.3rem' }}> My Resume</Typography>
              </MenuItem>
            </Scroll>
          </Box>
        </Toolbar>

      </Container>
    </AppBar>
  )
}

export default NavBar