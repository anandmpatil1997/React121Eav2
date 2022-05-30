import { useState } from 'react'
import logo from './logo.svg'
import React from 'react'

import RegisterPageOne from './Pages.js/RegisterPageOne'
import RegisterPageTwo from './Pages.js/RegisterPageTwo'
// import {BrowserRouter as Router, Route,Switch   } from "react-router-dom"
  
import './App.css'

function App() {
 
  return (
    <div className="App">
     <RegisterPageOne/>
     <RegisterPageTwo/>
    </div>
  )
}

export default App
