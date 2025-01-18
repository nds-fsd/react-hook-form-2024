import React, { useRef } from "react";

// En este componente haremos uso de useRef haciendo focus en un input
const RefExample = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={handleFocus}>Focar Input</button>
    </div>
  );
}

export default RefExample;