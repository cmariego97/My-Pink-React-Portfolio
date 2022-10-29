import * as React from 'react';
import '../assets/css/style.css'
import pfp from '../assets/images/pfpAvatar.jpeg'

// import MUI
import { Avatar, Box, IconButton, Link, Typography} from '@mui/material'
import { Stack } from '@mui/system';

// import components
import NavBar from './NavBar'

// import icons
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


function Header() {
  return (
    <Box className='headWrapper'>
        {/* AVATAR */}
        {/* <Avatar alt="an image of clarence" src={pfp} sx={{ width: 24, height: 24 }}/> */}

        <Box>
            <Stack direction="row" spacing={4} className="socials">
                <Link href="https://github.com/cmariego97">
                    <GitHubIcon />
                </Link>
                <Link href="https://instagram.com/cme.gogogo">
                    <InstagramIcon />
                </Link>
                <Link href="#">
                    <FacebookRoundedIcon />
                </Link>
            </Stack>
        </Box>
        
        {/* GREETING */}
        <Box>
            <Typography variant="h1" align="center" color="primary.main">Clarence Go</Typography>
            <Typography variant="h5" align="right" color="info.main">Web Developer</Typography>
        </Box>
        
    </Box>
  )
}

export default Header