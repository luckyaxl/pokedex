/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render } from "@testing-library/react";
 
 import NavBar from "src/components/NavBar";
 
 describe("<NavBar />", () => {
   it("should render title", () => {
     const enabledProps = {
       title: "My Pokemon",
     };
 
     const component = render(<NavBar {...enabledProps} />);
 
     expect(component).toBeTruthy();
   });
 });
 