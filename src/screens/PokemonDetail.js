import Grid from "@mui/material/Grid";
import React from "react";
import Container from "src/components/Container";
import Empty from "src/components/Empty";
import Loader from "src/components/Loader";
import MetaTags from "src/components/MetaTags";
import NavBar from "src/components/NavBar";
import Detail from "src/components/PokemonDetail";
import PokemonDetailCard from "src/components/PokemonDetailCard";
import { usePokemonQuery } from "src/hooks/usePokemon";
import { capitalize } from "src/utils/leadZero";

function PokemonDetail({ name }) {
  const { loading, data } = usePokemonQuery({
    variables: {
      name,
    },
    fetchPolicy: "no-cache",
  });

  if (loading) return <Loader />;

  if (!data.pokemon.name) return <Empty />;

  const pokemonName = capitalize(data.pokemon.name);

  return (
    <Container>
      <MetaTags title={pokemonName} />
      <NavBar title={pokemonName} />

      <Grid container spacing={2} className="layout">
        <Grid item lg={6} sm={12} xs={12}>
          <Detail pokemon={data.pokemon} />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <PokemonDetailCard pokemon={data.pokemon} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail;
