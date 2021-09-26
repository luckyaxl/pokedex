import styled from "@emotion/styled";

import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Router from "next/router";

function AppBar({ title }) {
  return (
    <NavBar>
      <nav>
        <div className="box">
          <ArrowBackIosIcon
            className="btn-icon"
            onClick={() => Router.back()}
          />
        </div>

        <div className="title">{title}</div>
      </nav>
    </NavBar>
  );
}

const NavBar = styled.header`
  left: auto;
  right: 0;
  top: 0;
  width: 100%;
  position: fixed;
  height: 50px;
  background-color: #242735;
  box-shadow: 0 5px 20px -10px #000;
  z-index: 1000;
  color: #ffffff;
  border-bottom: 1px solid #3a3f50;

  @media only screen and (min-width: 600px) {
    display: none;
  }

  .box {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
  }

  .btn-icon {
    cursor: pointer;
    color: #ffffff;

    &:hover {
      color: #a5a5a5;
    }
  }

  nav {
    position: relative;
    height: 52px;
    display: flex;
    align-items: center;
  }

  .title {
    margin-left: 5px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export default AppBar;
