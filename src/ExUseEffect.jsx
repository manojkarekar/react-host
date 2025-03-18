import React, { useState } from "react";
import { useEffect } from "react";

const ExUseEffect = () => {
  const [Theme, setTheme] = useState(false);
  const [Counter,SetCounter] = useState(0);

  
  useEffect(() => {
    let intervel =  setInterval(() => {
        SetCounter(prev => prev+10);
    }, 1000);
    

    return ()=>clearInterval(intervel);
      
},[]);

if(Theme){
    document.body.style.backgroundColor = "black";
}else{
    document.body.style.backgroundColor = "white";
    
}

//   console.log(Theme)


  return (
    <>
      <h1>{Theme} </h1>
      <button onClick={() => setTheme(!Theme)}>{Theme ? "Dark" : "Light"}</button>


    <h1 style={{color : Theme ? "white" : 'black'}}>Counter : {Counter}</h1>

    </>
  );
};

export default ExUseEffect;
