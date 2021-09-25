import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Router from "next/router";
import React from "react";
import FlashOnIcon from '@mui/icons-material/FlashOn';

function PokemonDetail({ pokemon }) {
  return (
    <Detail>
      <div className="info">
        <div className="back-btn" onClick={() => Router.back()}>
          <ArrowBackIosIcon />
        </div>
        <div>
          <div className="title">#{pokemon.id}</div>
          <div className="id">{pokemon.name}</div>
        </div>
      </div>

      <div className="image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
        />
      </div>

      <Catch onClick={() => Router.back()}>
        <button className="btn">
          <FlashOnIcon className="btn-icon" />
          Catch Pokemon
        </button>
      </Catch>
    </Detail>
  );
}

const Detail = styled.div`
  width: 100%;
  
  .info {
    margin-bottom: 30px;
    display: flex;
    align-items: flex-start;
    align-items: center;

    .back-btn {
      cursor: pointer;
      color: #ffffff;
      margin-right: 10px;

      &:hover {
        color: #a5a5a5;
      }

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }

    .title {
      font-size: 20px;
      margin: 0px;
      color: white;
    }

    .id {
      font-size: 30px;
      font-weight: bold;
      color: white;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    animation: float 3s ease-out infinite;
    filter: drop-shadow(0 0 0.75rem crimson);

    img {
      height: calc(100vh - 260px);
      padding: 20px;
      width: 100%;
    }

    @media only screen and (max-width: 600px) {
      img {
        height: 300px;
        width: 100%;
      }
    }
  }

  @keyframes float {
    50% {
      transform: translate(0, 20px);
    }
  }
`;

const Catch = styled.div`
  position: relative;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    bottom: 0;
    position: fixed;
    background: #2a2a39;
    border-top: 1px solid #3a3f50;
    right: 0;
    left: 0;
    padding: 15px;
    z-index: 1000;
    .btn {
      width: 100%;
    }
  }

  .btn {
    color: white;
    padding: 10px 30px;
    font-weight: 800;
    border-radius: 8px;
    font-size: 15px;
    background: #046cfc;
    cursor: pointer;
    border: none;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      background: #035edc;
    }

    .btn-icon {
      font-size: 17px;
      margin-right: 5px;
    }
  }
`;

export default PokemonDetail;
