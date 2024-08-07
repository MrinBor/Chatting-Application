import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
//We will haev t the folowinhg


function Home(props) {

  const setIsIn = props.setIsIn;
  const navigate = useNavigate();

  const handleLogout = async  ()=>{
    await signOut(auth);
    setIsIn(false)
    navigate("/logging")
    alert("LOGOUT !!")
  }


  //Now we will, hae  the followuing
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="bg-lime-300 p-4 text-4xl font-bold text-blue-600">
        Default route is Here || Please note
      </h1>

      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
}

export default Home;
