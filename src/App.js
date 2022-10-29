import React, { useState } from 'react';
import logo from './logo.svg';
import './assets/css/App.css';

//import MUI
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

//import components
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
      primary: {
          light: "#BE6B93",
          main: "#CB2193",
      },
      secondary: {
          main: "#9783C7",
      },
      error: {
          main: "#f44336",
      },
      warning: {
          main: "#ef742c"
      },
      info: {
          main: "#271B36"
      },
      success: {
          main: "#728464"
      },
      neutral: {
          main: "#9CA6B5"
      }
  },
  typography: {
      fontFamily: [
          'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid'
      ],
      h1: {
          fontFamily: ['Abril Fatface'],
          fontWeight: 400,
          fontSize: 85,
      },
      h2: {
          fontFamily: ['Poppins', 'sans serif'],
          fontWeight: 600,
          fontSize: 50,
      },
      h3: {
          fontFamily: ['Poppins', 'sans serif'],
          fontWeight: 400,
          fontSize: 40,
      },
      h4: {
          fontWeight: 400,
          fontSize: 24,
          textTransform: 'uppercase',
          lineHeight: '2rem',
      },
      h5: {
          fontFamily: ['Poppins', 'sans serif'],
          fontWeight: 100,
          fontSize: 18,
          textTransform: 'uppercase',
          lineHeight: '2rem',
      },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Header />
          <AboutMe />
        </header>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
