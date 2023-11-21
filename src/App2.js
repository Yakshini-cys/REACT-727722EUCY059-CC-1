import React, { useState } from 'react';

export default function Textfield() {
  const [input, setInputText] = useState('');

  const handle = (event)=> {
    const text = event.target.value;
    setInputText(text);
  };

  return (
    
    <div>
      <textarea
        rows="5"
        cols="100"
        placeholder="Ask something !"
        value={input}
        onChange={handle}
      />
      <p>Current Value: {input}</p>
    </div>
  );
}

