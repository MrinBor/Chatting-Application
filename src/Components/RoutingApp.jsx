import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Logging from './Logging';
import Chat from './Chat';

function RoutingApp() {

    const [isIn,setIsIn] = useState(true);


  return (

      <Routes>
        <Route path="/" element={
            <Protected_Route isIn={isIn} setIsIn={setIsIn}>
               <Home setIsIn={setIsIn}></Home>
            </Protected_Route>}>
        </Route>        

        <Route path="/chat/:uniqueid" element={
            <Protected_Route isIn={isIn} setIsIn={setIsIn}>
                <Chat/>
            </Protected_Route>}>
        </Route>


        <Route path="/logging" element={
            <Logging setIsIn={setIsIn}>
            </Logging>}>
        </Route>
      </Routes>    
    
  )
}


function Protected_Route(props)
{
    const setIsIn = props.setIsIn;
    const isIn = props.isIn;
    const children = props.children;

    if(isIn){
        return children;
    }
    else//false 
    {
        return<Navigate to="/logging"></Navigate>
    }
}

export default RoutingApp;