/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import MetaTags from "src/components/MetaTags";

describe("<MetaTags />", () => {
  it("should render title", () => {
    const enabledProps = {
      title: "Pokemon",
    };

    const component = render(<MetaTags {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});
