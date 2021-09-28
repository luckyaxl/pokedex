import styled from "@emotion/styled";
import React from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

function Loader() {
  return (
    <Loading>
      <CatchingPokemonIcon className="loads" />
    </Loading>
  );
}

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: #242735;

  .loads {
    position: absolute;
    color: white;
    top: 45%;
    left: 45%;
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
