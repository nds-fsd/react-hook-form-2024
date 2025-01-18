/* eslint-disable react/display-name */
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, label }) => {
    console.log(`Renderizando botón: ${label}`);
    return <button onClick={onClick}>{label}</button>;
  });

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <Button handleClick={increment} label="Incrementar" />
    </div>
  );
}

export default CallbackExample;