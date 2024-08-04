import React from 'react';

function Keypad() {
  function handleinput(event) {
    console.log("Entering password...");
  }

  return (
    <input type='password' name='password' onChange={handleinput} />
  );
}

export default Keypad;
