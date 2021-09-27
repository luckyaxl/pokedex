import styled from "@emotion/styled";
import React from "react";

function Loader() {
  return (
    <Loading>
      <img alt=".." src="/pokeball.png" width="100" className="loads" />
    </Loading>
  );
}

const Loading = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242735;

  .loads {
    position: absolute;
    top: 40%;
    -webkit-animation: lds-dual-ring 0.5s linear infinite;
    -moz-animation: lds-dual-ring 0.5s linear infinite;
    animation: lds-dual-ring 0.5s linear infinite;
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
