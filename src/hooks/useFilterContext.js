import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export function useFilterContext() {
  const context = useContext(FilterContext)

  if(!context){
    throw new Error("Contexto não encontrado")
  }

  return context
}