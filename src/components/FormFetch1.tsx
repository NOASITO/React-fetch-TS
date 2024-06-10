interface Count {
  count: number
  incrementar: () => void
  decrementar: () => void
}
export const FormFetch1 = ({ count, incrementar, decrementar }: Count) => {
  return (
    <div>
      <h1>component 1</h1>
      <h3>{count}</h3>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  )
}