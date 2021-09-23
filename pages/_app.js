import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "src/utils/apolloClient";

import "src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
