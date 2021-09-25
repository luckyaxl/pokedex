import React, { useState } from "react";
import styled from "@emotion/styled";
import clsx from 'clsx'

function PokemonCaught() {
  const [isScroll, setIsScroll] = useState(false);

  React.useEffect(() => {
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
      <div className="card fit">
        <div className="caught">
          <span>Caught</span>
          <span>5</span>
        </div>
        <div className="pokemons">
          <span>Pokemons</span>
          <span>1239817</span>
        </div>
      </div>

      <div className={clsx(`card-fixed ${isScroll && "show"}`)}>
        <div className="caught">
          <span>Caught</span>
          <span>5</span>
        </div>
        <div className="pokemons">
          <span>Pokemons</span>
          <span>1239817</span>
        </div>
      </div>
    </TotalCard>
  );
}

const TotalCard = styled.div`
  transition: 0.4s;

  .card {
    background: url("https://i.pinimg.com/originals/81/79/90/8179906d94fda9b711bc9b768413f24a.jpg");
    background-size: auto;
    background-repeat: no-repeat;
    background-color: #282b39;
    color: #ffffff;
    border: 1px solid #3a3f50;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%);
    width: 100%;
    padding: 30px;
    user-select: none;
    user-select: none;
    margin-bottom: 15px;
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
    color: #ffffff;
    margin-bottom: 10px;
  }

  .pokemons {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export default PokemonCaught;
