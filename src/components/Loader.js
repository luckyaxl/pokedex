import React from "react";
import styled from "@emotion/styled";

function Loader() {
  return (
    <Loading>
      <img alt=".." src="/pokeball.png" width="100" className="loads" />
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
  transition: opacity 0.2s;

  .loads {
    position: absolute;
    top: 45%;
    left: 45%;
    -webkit-animation: lds-dual-ring 1s linear infinite;
    -moz-animation: lds-dual-ring 1s linear infinite;
    animation: lds-dual-ring 1s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
