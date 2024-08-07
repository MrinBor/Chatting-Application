import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import Login from './Components/Login'
import Logging from './Components/Logging'
import Chat from './Components/Chat';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';


import { Routes,Route } from 'react-router-dom';
//Routes in tehswitch case model
//Based on the route or the path


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/logging" element={<Logging></Logging>}></Route>
          <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          {/**It will match with everything */}

        </Routes>

      </div>
    </div>
    </>
  )
}

export default App;
 
/**
 * For pattern matching we will have the following
 * 
 * chat + Something
 * 
 * 
 * /chat/:uniqueID
 * the unique ifd may be any Gibberish thang
 * 
 * /Chat/:uniqueID
 * 
 * /:uniqueId -->>
 * //Unique Id or chat 
 * 
 * 
 */

/**
 * The * parameter is Universal
 * 
 */
/**
 * 
 * 
 * 
 * Routes have Route
* It will work like a switch case kind of thing
 */