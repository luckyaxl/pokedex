import React from "react";
import Head from "next/head";

function MetaTags({ title = "Pokemon" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content="Pokemon" />
      <meta name="description" content="Pokomens Character" />
      <meta name="keywords" content="pokemon" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
  );
}

export default MetaTags;
