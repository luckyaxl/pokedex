import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { PokemonProvider } from "src/contexts/PokemonContext";
import "src/styles/globals.css";
import client from "src/utils/apolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default MyApp;
