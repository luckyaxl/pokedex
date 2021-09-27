import React from "react";
import styled from "@emotion/styled";

export default function PokemonInfo({ pokemon }) {
  return (
    <Container>
      <h4>Types</h4>
      <div className="types">
        {pokemon.types.map((item, i) => (
          <div key={i} className="type">
            {item.type.name}
          </div>
        ))}
      </div>

      <h4>Moves</h4>

      <List>
        <ul className="move-list">
          {pokemon.moves.map((item, i) => (
            <li key={i} className="move">
              {item.move.name}
            </li>
          ))}
        </ul>
      </List>
    </Container>
  );
}

const Container = styled.div`
  .types {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    user-select: none;

    .type {
      background-color: #3a4152;
      font-weight: bold;
      margin-right: 10px;
      margin-bottom: 10px;
      align-self: center;
      color: #ffffff;
      font-size: 12px;
      padding: 7px 20px;
      border-radius: 5px;
    }
  }

  h4 {
    margin-top: 0px;
    margin-bottom: 10px;
    color: #ffffff;
  }
`;

const List = styled.div`
  background: #1d1d27;
  padding: 5px 20px;
  border-radius: 10px;
  border: 1px solid #3a3f50;
  max-height: calc(100vh - 185px);
  overflow-y: auto;
  box-shadow: inset 0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%);

  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
  }

  .move-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  ul {
    position: relative;
    list-style: none;
    margin-left: 0;
    padding-left: 0px;
  }
  li:before {
    content: "+";
    color: yellow;
    margin-right: 8px;
  }

  .move {
    font-size: 14px;
    color: #fff;
    user-select: none;
  }

  @media (max-width: 600px) {
    min-height: fit-content;
    max-height: 100%;
    .move-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
