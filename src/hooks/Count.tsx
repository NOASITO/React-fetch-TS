import { useState } from "react";

interface useCounterProps {
  count: number
  incrementar: () => void
  decrementar: () => void
}

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const incrementar = () => setCount(count + 1)
  const decrementar = () => setCount(count - 1)

  return {
    count,
    incrementar,
    decrementar
  }
}