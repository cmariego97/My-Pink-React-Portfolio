import React from 'react'
import '../assets/css/styles.css'

// import MUI
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography} from '@mui/material'
import Masonry from '@mui/lab/Masonry';

// tiles height
const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

// styling
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Projects() {
  return (
    <Box className='projectContainer'>
        <Masonry columns={4} spacing={2}>
            {heights.map((height, index) => (
                <Item key={index} sx={{ height }}>
                {index + 1}
                </Item>
            ))}
        </Masonry>
    </Box>
  )
}

export default Projects