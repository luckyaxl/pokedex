import styled from "@emotion/styled";
import clsx from "clsx";
import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "src/contexts/PokemonContext";

function PokemonCaught() {
  const [isScroll, setIsScroll] = useState(false);
  const { myPokemons, count } = useContext(PokemonContext);

  useEffect(() => {
    window.onscroll = function (e) {
      if (window.scrollY > 130) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
  });

  return (
    <TotalCard>
      <div className="card">
        <img src="/pokemon-logo.png" alt=".." height="90" />
        <div className="box">
          <div className="caught">
            <span>Caught</span>
            <span>{myPokemons.length}</span>
          </div>
          <div className="pokemons">
            <span>Pokemons</span>
            <span>{count}</span>
          </div>
        </div>
      </div>

      <div className={clsx(`card-fixed ${isScroll && "show light"}`)}>
        <div className="caught">
          <span>Caught</span>
          <span>{myPokemons.length}</span>
        </div>
        <div className="pokemons">
          <span>Pokemons</span>
          <span>{count}</span>
        </div>
      </div>
    </TotalCard>
  );
}

const TotalCard = styled.div`
  transition: 0.4s;
  color: #ffffff;

  .card {
    background-color: yellow;
    background: url("https://play.pokemonshowdown.com/fx/bg-forest.png");
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #3a3f50;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%);
    width: 100%;
    padding: 30px;
    user-select: none;
    user-select: none;
    margin-bottom: 15px;

    .box {
      width: 200px;
    }
  }

  img {
    margin-bottom: 30px;
  }

  .card-fixed {
    display: none;
    margin-bottom: 20px;
    bottom: 0;
    width: 200px;
    position: fixed;
    left: 0;
    padding: 20px;
    color: white;
    z-index: 1000;
    background: #11131b;
    border-radius: 0px 10px 10px 0px;
    opacity: 0.8;
  }

  .show {
    display: initial;
  }

  .caught {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .pokemons {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: bold;
  }

  .light {
    color: #ffffff;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 100%;
      height: auto;
    }

    .card {
      .box {
        width: 100%;
      }
    }

    .caught {
      font-size: 20px;
    }
  }
`;

export default PokemonCaught;
