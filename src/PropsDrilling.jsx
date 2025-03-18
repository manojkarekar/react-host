import React, { useEffect, useRef, useState } from "react";

const PropsDrilling = () => {
  let h1_tag = useRef();
  const prevCounterRef = useRef();
  let [counter, setCounter] = useState(0);

  // get input data 
  const [name,setName] = useState("");
  const a = useRef();



  useEffect(() => {
    prevCounterRef.current = counter;
    console.log(prevCounterRef);
  }, [counter]);


  const TestBtn = () => {
    console.log(h1_tag);

    console.log(h1_tag.current);
  };


  const BtnSubmit = (event)=>{
    event.preventDefault();

   setName(a.current.value);
  }

  console.log("testing....")
  return (
    <>
      <h1 ref={h1_tag}>Reactjs UseRef</h1>
      <button onClick={TestBtn}>Test Btn</button>

      <h1>{counter}</h1>
      <h1>{prevCounterRef.current}</h1>
      <button onClick={() => setCounter(counter + 1)}>Btn</button>




<h1>Name is {name}</h1>
      <form action="">

        {/* <input type="text" name="name" ref={a} onChange={(e)=>setName(e.target.value)} /> */}
        <input type="text" name="name" ref={a} onChange={(e)=>setName(e.target.value)} />

        <button onClick={BtnSubmit}>submit</button>
      </form>
    </>
  );
};

export default PropsDrilling;
