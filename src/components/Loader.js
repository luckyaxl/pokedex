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
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  inset: 0px;
  z-index: 1000;
  background: #242735;

  .loads {
    display: inline-block;
    color: white;
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
