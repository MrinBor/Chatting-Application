import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import RoutingApp from './Components/RoutingApp.jsx';
import User from './useEffect/User.jsx'

//This contains the SetuP
//Wrap app companent rrendered by the main Component 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <RoutingApp/>
  </BrowserRouter>
)


  // <RoutingApp />
