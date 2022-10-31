import * as React from 'react'
import '../assets/css/styles.css'

// import MUI
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'

// import icons
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

// import react scroll
import { Link as Scroll } from 'react-scroll';

function NavBar(changePage) {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="navBar">
          {/* TITLE - HOME */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, my:2 }}>
            <FavoriteBorderRoundedIcon sx={{ my:2, mr:2, display: { xs: 'none', md: 'flex' }}} />
            <Scroll to="home" smooth={true}>
              <Button><Typography variant="h6" sx={{ my: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>Claire</Typography></Button>
            </Scroll>
          </Box>
          
          {/* NAV MENU ITEMS */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, my:2 }}>
            <Scroll to="about-me" smooth={true}>
              <Button>
                <Typography variant="h6" sx={{ my: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>About Me</Typography>
              </Button>
            </Scroll>

            <Typography variant="h6" sx={{ my: 1.5, mx: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>○</Typography>

            <Scroll to="my-projects" smooth={true}>
              <Button>
                <Typography variant="h6" sx={{ my: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>My Projects</Typography>
              </Button>
            </Scroll>

            <Typography variant="h6" sx={{ my: 1.5, mx: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>○</Typography>

            <Scroll to="contact-me" smooth={true}>
              <Button>
                <Typography variant="h6" sx={{ my: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>Contact Me</Typography>
              </Button>
            </Scroll>

            <Typography variant="h6" sx={{ my: 1.5, mx: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}>○</Typography>

            <Scroll to="my-resume" smooth={true}>
              <Button>
                <Typography variant="h6" sx={{ my: 1, display: { xs: 'none', md: 'flex' }, color: "#F3F4F3", letterSpacing: '.3rem' }}> My Resume</Typography>
              </Button>
            </Scroll>
          </Box>
        </Toolbar>

      </Container>
    </AppBar>
  )
}

export default NavBar