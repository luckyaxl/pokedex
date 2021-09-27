import Grid from "@mui/material/Grid";
import Link from "next/link";
import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Container from "src/components/Container";
import MetaTags from "src/components/MetaTags";
import PokemonBall from "src/components/PokemonBall";
import PokemonCard from "src/components/PokemonCard";
import PokemonCaught from "src/components/PokemonCaught";
import { PokemonContext } from "src/contexts/PokemonContext";

function PokemonList() {
  const { pokemons, hasMore, loadMore } = useContext(PokemonContext);

  return (
    <Container>
      <MetaTags title="Pokemons" />
      <PokemonCaught />

      <InfiniteScroll
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={"loading"}>
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
