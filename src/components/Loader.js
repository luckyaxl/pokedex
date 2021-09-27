import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";

function Loader() {
  return (
    <Loading>
      <div className="loads">
        <Image alt=".." src="/pokeball2.png" width={100} height={100} />
      </div>
    </Loading>
  );
}

const Loading = styled.div`
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242735;

  .loads {
    position: absolute;
    top: 45%;
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
