import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Container from "src/components/Container";
import PokemonCard from "src/components/PokemonCard";
import PokemonBall from "src/components/PokemonBall";
import { PokemonContext } from "src/contexts/PokemonContext";
import { usePokemonsQuery } from "src/hooks/usePokemons";

function PokemonList() {
  const { pokemons, setPokemons, offset, setOffset, hasMore, setHasMore } = useContext(PokemonContext);

  const payload = {
    variables: {
      offset,
    },
  };

  const { data } = usePokemonsQuery(payload);

  const loadMore = async () => {
    if (data?.pokemons.nextOffset) {
      await setOffset(data?.pokemons.nextOffset);
    }
  };

  useEffect(() => {
    if (data?.pokemons) {
      setPokemons(pokemons.concat(data?.pokemons.results));
      setHasMore(Boolean(data?.pokemons.nextOffset))
    }
  }, [data]);

  return (
    <Container>

      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <Grid container spacing={2}>
          {pokemons.map((item, i) => (
            <PokemonCard data={item} key={i} />
          ))}
        </Grid>
      </InfiniteScroll>

      <Link href="/mypokemons">
        <PokemonBall />
      </Link>
    </Container>
  );
}

export default PokemonList;
