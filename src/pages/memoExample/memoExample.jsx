import React, { useState, useMemo } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const primeNumbers = useMemo(() => {
    const primes = [];
    for (let i = 1; i <= number; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }, [number]);

  return (
    <div>
      <h2>Números primos hasta {number}</h2>
      <p>{primeNumbers.join(", ")}</p>
      <button onClick={() => setNumber(number + 1)}>Incrementar Número</button>
      <button onClick={() => setCount(count + 1)}>Actualizar ({count})</button>
    </div>
  );
}

export default MemoExample;