/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import PokemonInfo from "src/components/PokemonInfo";

describe("<PokemonInfo />", () => {
  it("should render title", () => {
    const props = {
      pokemon: {
        name: "metapod",
        id: 11,
        moves: [
          {
            move: { name: "string-shot" },
          },
          {
            move: { name: "harden" },
          },
          {
            move: { name: "iron-defense" },
          },
          {
            move: { name: "bug-bite" },
          },
          {
            move: { name: "electroweb" },
          },
        ],
        types: [
          {
            type: { name: "bug" },
          },
        ],
      },
    };

    const component = render(<PokemonInfo {...props} />);

    expect(component).toBeTruthy();
  });
});
