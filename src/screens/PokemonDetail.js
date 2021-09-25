import Grid from "@mui/material/Grid";
import React from "react";
import Container from "src/components/Container";
import { usePokemonQuery } from "src/hooks/usePokemon";
import Detail from "src/components/PokemonDetail";
import PokemonDetailCard from "src/components/PokemonDetailCard";
import NavBar from "src/components/NavBar";


function PokemonDetail({ name }) {
  const { error, loading, data } = usePokemonQuery({
    variables: {
      name,
    },
    fetchPolicy: "no-cache",
  });

  if (error) return "no data";

  if (loading) return "loading";

  return (
    <Container>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item lg={6} sm={12} xs={12}>
          <Detail pokemon={data?.pokemon} />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <PokemonDetailCard pokemon={data?.pokemon} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail;
