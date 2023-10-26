import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function toggleOn(){
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return <button style={{background: color}} onClick={toggleOn}>{ isOn ? 'ON' : 'OFF' }</button>;
}

export default Toggle;
