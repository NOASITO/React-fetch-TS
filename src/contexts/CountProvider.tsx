import { CountContext } from "./CountContext";

interface CountContextProps {
  children: JSX.Element | JSX.Element[]
}

export const CountProvider = ({ children }: CountContextProps) => {
  return (
    <CountContext.Provider value={{  }}>
      { children }
    </CountContext.Provider>
  )
}