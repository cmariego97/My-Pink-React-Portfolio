import React from 'react'
import '../assets/css/styles.css'

// import MUI
import { styled } from '@mui/material/styles';
import { Box, Link, Paper, Typography} from '@mui/material'
import Masonry from '@mui/lab/Masonry';

// import icons
import { GitHub, Language } from '@mui/icons-material'

// styling
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F3F4F3',
    ...theme.typography.h5,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.neutral,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  }));

// images
const itemData = [
    {
      img: 'https://i.ibb.co/VTH1t0n/kids-rx-emr.png',
      title: 'Kids-Rx-EMR',
      github: 'https://github.com/cmariego97/Kids-RX',
      app: 'https://kids-rx-emr.herokuapp.com/',
    },
    {
      img: 'https://i.ibb.co/CnwrGzg/virtualpartyapp.png',
      title: 'Virtual-Party App',
      github: 'https://github.com/rpecuch/virtual-party',
      app: 'https://rpecuch.github.io/virtual-party/',
    },
    {
      img: 'https://i.ibb.co/CJ36F3n/pastel-portfolio.png',
      title: 'My First Portfolio',
      github: 'https://github.com/cmariego97/Claire-s-Pastel-Portfolio',
      app: 'https://cmariego97.github.io/Claire-s-Pastel-Portfolio/'
    },
    {
      img: 'https://i.ibb.co/PM4LDjc/weatherdash.png',
      title: 'Weather Dashboard',
      github: 'https://github.com/cmariego97/Weather-Dashboard-API',
      app: 'https://cmariego97.github.io/Weather-Dashboard-API/',
    },
    {
      img: 'https://i.ibb.co/q7S2ssL/work-day.png',
      title: 'Work Day Scheduler',
      github: 'https://github.com/cmariego97/Work-Day-Scheduler',
      app: 'https://cmariego97.github.io/Work-Day-Scheduler/',
    },
    {
      img: 'https://i.ibb.co/p3GpLRj/javascript-quiz.png',
      title: 'JavaScript Quiz',
      github: 'https://github.com/cmariego97/A-Broken-JavaScript-Quiz',
      app: 'https://cmariego97.github.io/A-Broken-JavaScript-Quiz/',
    },
  ];

function Projects() {
    return (
        <Box id="my-projects" className="projectsContainer" sx={{ minHeight: 829 }}>
            <Box className="sectionContent-2" sx={{ my: 2}}>
                <Typography variant="h2" className="sectionTitle" sx={{ my:2, letterSpacing: '.3rem', textTransform: 'lowercase'}}> My Projects </Typography>
                <Masonry columns={2} spacing={3} className="masonry">
                    {itemData.map((item, index) => (
                    <div key={index} className="masonryItem">
                        <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                        />
                        <Label className="masonryLink">
                          <Link href={`${item.github}`}>
                            <GitHub />
                          </Link>
                          <Link href={`${item.app}`}>
                            <Language />
                          </Link>
                      </Label>
                    </div>
                    ))}
                </Masonry>
            </Box>
        </Box>
    );
}

export default Projects