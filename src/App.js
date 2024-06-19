import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
//import { Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';

import Alert from './components/Alert';


function App() {
  const [darkMode, setDarkMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);   
  }

  const toggleMode = () =>{
    if (darkMode === 'light'){
      setDarkMode('dark')
      document.body.style.backgroundColor ='#032744';
      document.body.style.color = 'white';
      showAlert("Dark Mode is Activated", "success");
      document.title = "Texttile - DarkMode"
      /*setInterval(() => {
        document.title = "Textile is Amazing"
      }, 1000);;*/
    }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode is Activated", "success");
    }
  }
  return (
    <>
      <Navbar title= "TeaxtUtils" aboutText = 'About' mode ={darkMode} toggleMode={toggleMode}/>
      <Alert alert ={alert} />
     { /*<div>*/}
      <Textform heading = 'Enter the text which u want to convert' mode = {darkMode} showAlert={showAlert}/>
      {/*<About/>
     </div> 
     <div>
      <Routes>
          <Route path='/' element={<Textform heading = 'Enter the text which u want to convert' mode = {darkMode} showAlert={showAlert}/>}/>
          <Route path='/about' element={<About/>} />
      </Routes>
      </div>*/} 
    </>
  );
}

export default App;
