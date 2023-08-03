import './App.css';
import './index.js';
import { Route, Routes, NavLink } from 'react-router-dom';
import Welcome from './components/Welcome';
import User from './components/User';
import {CssBaseline} from '@material-ui/core';
import Home from './components/Home';
import { green, purple } from '@material-ui/core/colors';
import { createTheme ,ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      light: "#ff4081",
      main: green[500], 
      dark: "#0d1f0e",
      contrastText: "#fff"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#061126',
      // main: purple[200],

    },
  },
  typography: {
    fontFamily:'sans-serif',
    fontSize:15,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color:"#061126 !important",
    },
    
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
  
      <div >
        <div style={
          {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: 'linear-gradient(120deg, #305170,#6DFC6B)',
            
            height: 70
          }
        }>

            <NavLink to='/' style={{fontSize:'1.2rem',textDecoration:'none',color:'Background'}}>HOME</NavLink><br />
            <NavLink to='/welcome' style={{fontSize:'1.3rem',textDecoration:'none',color:'Background'}} > WELCOME </NavLink><br />
            <NavLink to='/user' style={{fontSize:'1.3rem',textDecoration:'none',color:'Background'}}> USER </NavLink>
        </div>

        <Routes path='/'>
          <Route index element={<Home/>} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/user' element={<User name="Amrut" role="student" />} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;

