import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputtext] = useState("");
  const [tweet, setTweet] = useState("");
  

  return (
    <div className="p-4">


      {inputText}<br/><br/>
      <input type="text" placeholder="Enter Value" onChange={(e) => setInputtext(e.target.value)}/>


      <h1 className="text-2xl font-bold mb-4"> current count: {count}</h1>
      <div className="space-x-4 mb-6">
        <button onClick={() => setCount(count + Number(inputText))}>
          Increase + {inputText}
        </button>
        <button onClick={() => setCount(count - Number(inputText))}>
          Decrease - {inputText}
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        
      </div>
    </div>  
  );
};

export default Counter;
