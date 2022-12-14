import React from 'react'
import '../assets/css/styles.css'
import 'animate.css';
import pfp from '../assets/images/pfpAvatar.jpeg'

// import MUI
import { Avatar, Box, Typography} from '@mui/material'

function AboutMe() {
  return (
    <Box id="about-me" className="aboutContainer" sx={{ my: 2 }}>
        <Box className="aboutMe" sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Avatar alt="an image of clarence" src={pfp} className="avatar animate__pulse" sx={{ width: 500, height: 500 }}/>

            <Box className="sectionContent-2" sx={{ my: 2}}>
                <Typography variant="h2" className="sectionTitle" sx={{ my:2, letterSpacing: '.3rem', textTransform: 'lowercase'}}> About Me </Typography>
                <Box className="sectionInfoContainer">
                  <Typography className="sectionInfo" variant="body1" sx={{ color: "info"}}>
                    Hello there, I am Claire. I am 25 years old. I am currently study Nursing and Web Development while working full-time in an ICU.
                  </Typography> 
                  <Typography className="sectionInfo" variant="body1" sx={{ color: "info"}}>
                    I've always had an interest in coding and design and took the Coding Bootcamp as an opportunity to finally delve more into it.
                  </Typography>
                  <Typography className="sectionInfo" variant="body1" sx={{ color: "info"}}>
                    Some of my interests include art, gaming, coding, comic books, movies, etc. In my free time, I mostly indulge myself in playing video games and streaming on Twitch when I can.
                  </Typography>
                </Box>
                  
            </Box>
        </Box>
    </Box>
  )
}

export default AboutMe