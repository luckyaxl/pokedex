import Router from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { usePokemonsQuery } from "src/hooks/usePokemons";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [myPokemons, setMypokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState("");
  const [isCatching, setIsCatching] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [fail, setFail] = useState(false);

  const catchPokemon = () => {
    setIsCatching(true);
    setTimeout(() => {
      const stat = Math.random() > 0.5;

      if (stat) {
        setOpenModal(true);
      } else {
        setFail(true);

        setTimeout(() => {
          setFail(false);
        }, 1000);
      }

      setIsCatching(false);
    }, 2000);
  };

  const releasePokemon = (index) => {
    myPokemons.splice(index, 1);
    localStorage.setItem("mypokemons", JSON.stringify(myPokemons));
    Router.back();
  };

  const savePokemon = async (pokemonData) => {
    let arr = JSON.parse(localStorage.getItem("mypokemons")) || [];
    arr.push(pokemonData);

    setMypokemons(arr);

    const obj = JSON.stringify(arr);
    await localStorage.setItem("mypokemons", obj);
  };

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
      setCount(results.count);

      if (pokemons.length === results?.pokemons?.count) {
        setHasMore(false);
      }
    }
  }, [data]);

  useEffect(() => {
    let storage =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("mypokemons"))) ||
      [];

    setMypokemons(storage);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        hasMore,
        loadMore,
        count,
        isCatching,
        openModal,
        setOpenModal,
        fail,
        catchPokemon,
        releasePokemon,
        myPokemons,
        savePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
