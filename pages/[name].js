import PokemonDetail from "src/screens/PokemonDetail";

export default PokemonDetail;

export async function getServerSideProps(ctx) {
  const name = ctx.query.name;

  return {
    props: { name },
  };
}
