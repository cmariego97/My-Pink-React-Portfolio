import React, { useState } from 'react';
import '../assets/css/styles.css'

// import MUI
import { Box, Button, Link, Paper, styled, TextField, Typography, } from '@mui/material'

//import icons
import { LocalPhoneRounded, MailOutlineRounded } from '@mui/icons-material'

// CSSTextField for Text Box
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#728464',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#728464',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CB2193',
        },
        '&:hover fieldset': {
            borderColor: '#ef742c',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#728464',
        },
    },
  });

// Styles for Paper component
const FormPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  lineHeight: '1.5',
}));

function Contact () {
    const [contactName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confMessage, setConfMessage] = useState('');
    //runs whenever input in any of the form input areas changes
    const inputChange = (e) => {
        //extract e.target.name and e.target.value
        const { name, value } = e.target;
        //set value of state variable that corresponds with the input field that was edited
        if (name === 'name') {
            setName(value);
            setConfMessage('');
        }
        else if (name === 'email') {
            setEmail(value);
            setConfMessage('');
        }
        else {
            setMessage(value);
            setConfMessage('');
        }
        //displays message if an input field is left blank
        if (!contactName) {
            setConfMessage('Please enter your name!')
        }
        if (!email) {
            setConfMessage('Please enter your e-mail!')
        }
        if (!message) {
            setConfMessage('Please enter a message!')
        }
    }
    //runs when submit button is clicked
    const formSubmit = (e) => {
        e.preventDefault();
        //displays message if any field is left blank
        if(!contactName || !email || !message) {
            setConfMessage('Fill out all required fields!');
        }
        //displays message if email is not in correct format
        else if (!email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)) {
            setConfMessage('Invalid email format!')
        }
        //success message displayed and clears input fields
        else {
            setConfMessage('Thank you! Message received!');
            setName('');
            setEmail('');
            setMessage('');
        }
    }
    //define custom styles (in addition to stylesheet)
    const styles = {
        icon: {
            marginRight: '1%'
        },
        a: {
            textDecoration: 'none',
            color: 'inherit'
        },
        heading: {
            fontSize: '300%',
            color: 'grey'
        },
        li: {
            fontSize: '150%'
        }
    }
    //renders Contact page using styling and icons
    //utilizes inputChange and formSubmit functions defined above
    return(
        <Box id="contact-me" className="contactContainer" sx={{ my:2 }}>
            <Typography variant="h2" className="sectionTitle" sx={{ my:2, letterSpacing: '.3rem', textTransform: 'lowercase' }}>Socials & Contact</Typography>
            <Box className="infoContent">
                <Box className="sectionInfo">
                    <Typography variant="h6" className="contactInfo phoneNumber">
                        <LocalPhoneRounded sx={{ px:2 }}/>
                        (908)917-0180
                    </Typography>
                    <Typography id="email" variant="h6" className="contactInfo emailInfo">
                        <MailOutlineRounded sx={{ px:2 }}/>
                        <Link href="mailto:cmarie.go97@gmail.com" className="contactLink">
                            cmarie.go97@gmail.com
                        </Link>
                    </Typography>
                </Box>

                <FormPaper className="formContainer">
                    <Box className="formGroup">
                        <CssTextField label="Full Name" id="full-name" type="text" className="form-control" name="name" value={contactName} onChange={inputChange} placeholder="Peter B. Parker" fullWidth required/>
                    </Box>
                    <Box className="formGroup">
                        <CssTextField label="E-mail" id="e-mail" type="email" className="form-control" value={email} name="email" onChange={inputChange} placeholder="name@example.com" fullWidth required/>
                    </Box>
                    <Box className="formGroup">
                        <CssTextField label="Message" id="message" className="form-control" value={message} name="message" onChange={inputChange} multiline rows={8} placeholder="I don't feel so good, Mr. Stark..." fullWidth required></CssTextField>
                    </Box>
                    <Typography className="confMessage" variant="p">{confMessage}</Typography>
                    <Box className="formGroup">
                        <Button variant="outlined" className="formButton" type="button" onClick={formSubmit}>Submit</Button>
                    </Box>
                </FormPaper>
            </Box>
            
        </Box>
    )
}

export default Contact;