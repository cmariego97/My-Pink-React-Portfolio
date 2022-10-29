import React from 'react'
import pfp from '../assets/images/pfpAvatar.jpeg'

// import MUI
import { Avatar, Box, Typography} from '@mui/material'
import { Container } from '@mui/system'

function AboutMe() {
  return (
    <Box>
        <Container>
            <Avatar alt="an image of clarence" src={pfp} sx={{ width: 400, height: 400 }}/>
        </Container>
    </Box>
  )
}

export default AboutMe