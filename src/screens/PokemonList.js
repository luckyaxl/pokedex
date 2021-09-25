import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Container from "src/components/Container";
import PokemonCard from "src/components/PokemonCard";
import PokemonBall from "src/components/PokemonBall";
import { PokemonContext } from "src/contexts/PokemonContext";
import PokemonCaught from "src/components/PokemonCaught";

function PokemonList() {
  const { pokemons, hasMore, loadMore } = useContext(PokemonContext);

  return (
    <Container>
      <PokemonCaught  />

      <InfiniteScroll initialLoad={false} loadMore={loadMore} hasMore={hasMore} loader={"loading"}>
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
