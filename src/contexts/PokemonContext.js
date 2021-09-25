import React, { createContext, useEffect, useState } from "react";
import { usePokemonsQuery } from "src/hooks/usePokemons";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const payload = {
    variables: {
      offset,
    },
  };

  const { data } = usePokemonsQuery(payload);
  const results = data?.pokemons;

  const loadMore = async () => {
    if (results?.nextOffset) {
      await setOffset(results?.nextOffset);
    }
  };

  useEffect(() => {
    if (results) {
      setPokemons(pokemons.concat(results?.results));
      setHasMore(Boolean(results.nextOffset));
    }
  }, [data]);

  return <PokemonContext.Provider value={{ pokemons, hasMore, loadMore }}>{children}</PokemonContext.Provider>;
}
