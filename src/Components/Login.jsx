import React from 'react';
import logo from '../assets/New_Image.png';
import "./Logincss.css";

function Login() {
  return (
    <div className="h-[220px] bg-lime-400">
      <div className="flex ml-4 pt-[40px] items-center gap-4 md:ml-[200px]">
        <img className="h-[60px] w-[60px] rounded-2xl md:h-[120px] md:w-[120px] align-top" src={logo} alt=""/>
        <div className="uppercase font-bold text-black text-sm md:text-lg">Conversations Made Easy</div>
      </div>
      <div className="bg-indigo-800 h-[calc(100vh-420px)] border-purple-600 flex justify-center items-center text-white-200">
        <div className="items-center h-[80%] w-[90%] md:w-[50%] shadow-2xl flex flex-col p-4 md:p-0">
          <div className="text-lg md:text-xl">Sign In</div>
          <div className="text-sm md:text-base mt-2 md:mt-4 text-center">Sign In with your Google account to get started</div>
          <button className="mt-4 md:mt-6 bg-blue-500 text-white py-2 px-4 rounded">Sign In with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
