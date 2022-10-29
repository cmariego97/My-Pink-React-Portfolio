import logo from './logo.svg';
import './assets/css/App.css';

//import MUI
import { createTheme, ThemeProvider } from '@mui/system';

//import components
import Header from './components/Header';
import NavBar from './components/NavBar'

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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
