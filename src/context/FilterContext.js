import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FilterContextProvider({ children }){
  const [categoria, setCategoria] = useState("petshop")

  return(
    <FilterContext.Provider value={{categoria, setCategoria}}>
      {children}
    </FilterContext.Provider>
  )
}