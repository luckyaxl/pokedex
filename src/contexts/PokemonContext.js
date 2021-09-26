import React, { createContext, useEffect, useState } from "react";
import { usePokemonsQuery } from "src/hooks/usePokemons";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const payload = {
    variables: {
      limit: 18,
      offset,
    },
  };

  const { data } = usePokemonsQuery(payload);
  const results = data?.pokemons;

  const loadMore = () => {
    if (hasMore) {
      setTimeout(() => {
        setOffset(data?.pokemons?.nextOffset);
      }, 500);
    }
  };

  useEffect(() => {
    if (results) {
      setPokemons(pokemons.concat(results?.results));

      if (pokemons.length === results?.pokemons?.count) {
        setHasMore(false);
      }
    }
  }, [data]);

  return (
    <PokemonContext.Provider value={{ pokemons, hasMore, loadMore }}>
      {children}
    </PokemonContext.Provider>
  );
}
