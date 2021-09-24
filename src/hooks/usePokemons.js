import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const POKEMONS_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      prevOffset
      nextOffset
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;

export function usePokemonsQuery(options) {
  const query = useQuery(POKEMONS_QUERY, options);
  return { ...query };
}
