import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Router from "next/router";
import React from "react";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { leadZero } from "src/utils/leadZero";
import ModalPokemonCaught from "src/components/ModalPokemonCaught";

function PokemonDetail({ pokemon }) {
  const [isCatching, setIsCatching] = React.useState(false);
  const [catched, setCatched] = React.useState(false);

  function catchPokemon() {
    setIsCatching(true);
    setTimeout(() => {
      const stat = Math.random() > 0.5;

      if (stat) {
        setCatched(true);
      } else {
        console.log("failed");
      }

      setIsCatching(false);
    }, 2000);
  }

  function handleClose() {
    setCatched(false);
  }

  return (
    <Detail>
      <div className="info">
        <div className="back-btn" onClick={() => Router.back()}>
          <ArrowBackIosIcon />
        </div>
        <div>
          <div className="id">#{leadZero(pokemon.id, 3)}</div>
          <div className="title">{pokemon.name}</div>
        </div>
      </div>

      <div className="image">
        {isCatching ? (
          <img className="balls" src="/pokeball2.png" />
        ) : (
          <img
            className="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
          />
        )}
      </div>

      <Catch onClick={() => catchPokemon()}>
        {isCatching ? (
          <div className="catcing">Catching ...</div>
        ) : (
          <button className="btn" disabled={isCatching}>
            <FlashOnIcon className="btn-icon" />
            {!isCatching ? "Catch Pokemon" : "Catching"}
          </button>
        )}
      </Catch>

      <ModalPokemonCaught open={catched} close={handleClose} />
    </Detail>
  );
}

const Detail = styled.div`
  width: 100%;
  max-height: calc(100vh - 260px);

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

    .id {
      font-weight: bold;
      font-size: 20px;
      margin: 0px;
      color: white;
    }

    .title {
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

    img {
      height: 350px;
      padding: 20px;
      max-width: 100%;
    }

    @media only screen and (max-width: 600px) {
      img {
        height: 300px;
        max-width: 100%;
      }
    }

    .pokemon {
      animation: float 3s ease-out infinite;
      filter: drop-shadow(0 0 0.75rem crimson);
    }

    .balls {
      filter: unset;
      animation: unset;
      -webkit-animation: lds-dual-ring 0.4s linear infinite;
      -moz-animation: lds-dual-ring 0.4s linear infinite;
      animation: lds-dual-ring 0.4s linear infinite;
    }

    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
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

  .catcing {
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    padding: 10px 0px;
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
      background: yellow;
      color: #000000;
    }

    &::disabled {
      background: #212121;
    }

    .btn-icon {
      font-size: 17px;
      margin-right: 5px;
    }
  }
`;

export default PokemonDetail;
