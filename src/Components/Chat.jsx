import React from 'react';
import { useParams } from 'react-router-dom';
//useParams brings up a HooK

function Chat() {
  // The use of useParams
  
  const { uniqueId } = useParams();//De structured// We have the folllowing
  const ParaMeters = useParams();


  console.log(ParaMeters);


  return (
    <div>Chat:: {uniqueId}
    
    <div>
        <p4>Object Destructured - {ParaMeters.uniqueId} </p4>
    </div>
    </div>
  );
}


export default Chat;


/**
 * 
 * Fetchin unique id from teh lsit of chats
 */