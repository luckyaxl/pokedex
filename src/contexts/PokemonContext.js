import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, offset, setOffset, hasMore, setHasMore }}>
      {children}
    </PokemonContext.Provider>
  );
}
