import React from "react";
import styled from "@emotion/styled";
import Button from "src/components/Button";
import Link from "next/link";

function Empty() {
  return (
    <EmptyData>
      <div>
        <div className="text">Pokemon Not Found :(</div>
        <Link href="/" passHref>
          <Button className="btn">Back</Button>
        </Link>
      </div>
    </EmptyData>
  );
}

const EmptyData = styled.div`
  height: 100vh;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  justify-self: center;
  color: #fff;
  display: flex;
  flex-direction: col;

  .text {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .btn {
    margin: auto;
  }
`;

export default Empty;
