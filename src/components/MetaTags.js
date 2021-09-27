import Head from "next/head";
import React from "react";

function MetaTags({ title = "Pokemon" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content="Pokemon" />
      <meta name="description" content="Pokomens Character" />
      <meta name="keywords" content="pokemon" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
  );
}

export default MetaTags;
