/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import PokemonCard from "src/components/PokemonCard";

describe("<PokemonCard />", () => {
  it("should render title", () => {
    const enabledProps = {
      data: {
        id: 1,
        name: "ivysaur",
        nickname: "joni",
      },
      index: 1,
      owned: true,
    };

    const component = render(<PokemonCard {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});
