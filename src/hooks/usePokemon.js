import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export function usePokemonQuery(options) {
  const query = useQuery(POKEMON_QUERY, options);
  return { ...query };
}
