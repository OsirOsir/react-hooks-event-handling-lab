// Code EyesOnMe Component Here

import React from "react";

function EyesOnMe() {

  function tohundlefocus(event) {
    console.log("Good!");
  }

  function tohundleblur(event) {
    console.log('Hey! Eyes on me!')
  }

  return(
    <button onFocus={tohundlefocus} onBlur={tohundleblur}>Eyes on me</button>
  )
}

export default EyesOnMe