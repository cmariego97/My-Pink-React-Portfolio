import React, { useState } from 'react';
import '../assets/css/styles.css'

// import MUI
import { Box, Link, Typography, } from '@mui/material'

//import icons
import { LocalPhoneRounded, MailOutlineRounded } from '@mui/icons-material'
import { hover } from '@testing-library/user-event/dist/hover';


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
            setConfMessage('Name is required')
        }
        if (!email) {
            setConfMessage('Email is required')
        }
        if (!message) {
            setConfMessage('Message is required')
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
            setConfMessage('Message received!');
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
            <Box className="card text-center con-info">
                <Typography variant="h2" className="sectionTitle" sx={{ my:2 }}>Contact Info</Typography>
                <Box className="sectionInfo">
                    <Typography variant="h6" className="contactInfo">
                        <LocalPhoneRounded sx={{ px:2 }}/>
                        (908) 917 - 0180
                    </Typography>
                    <Typography id="email" variant="h6" className="contactInfo">
                        <MailOutlineRounded sx={{ px:2 }}/>
                        <Link href="mailto:cmarie.go97@gmail.com" className="contactLink">
                            cmarie.go97@gmail.com
                        </Link>
                    </Typography>
                </Box>

            <form>
                <h2 style={styles.heading}>Contact Me</h2>
                <div className="form-group">
                    <label htmlFor="name" style={styles.li}>Name:</label>
                    <input type="text" className="form-control" name="name" value={contactName} onChange={inputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={styles.li}>Email address:</label>
                    <input type="email" className="form-control" value={email} name="email" onChange={inputChange} placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message" style={styles.li}>Message:</label>
                    <textarea className="form-control" value={message} name="message" onChange={inputChange} rows="8"></textarea>
                </div>
                <p style={styles.li}>{confMessage}</p>
                <button type="button" onClick={formSubmit}>Submit</button>
            </form>
            </Box>
            
        </Box>
    )
}

export default Contact;