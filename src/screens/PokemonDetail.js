import Grid from "@mui/material/Grid";
import Container from "src/components/Container";
import Empty from "src/components/Empty";
import Loader from "src/components/Loader";
import MetaTags from "src/components/MetaTags";
import NavBar from "src/components/NavBar";
import PokemonImage from "src/components/PokemonImage";
import PokemonInfo from "src/components/PokemonInfo";
import { usePokemonQuery } from "src/hooks/usePokemon";
import { capitalize } from "src/utils/leadZero";

function PokemonDetail({ name }) {
  const { loading, data } = usePokemonQuery({
    variables: {
      name,
    },
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
          <PokemonImage pokemon={data.pokemon} />
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <PokemonInfo pokemon={data.pokemon} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail;
