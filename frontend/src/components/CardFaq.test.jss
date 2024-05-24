import React from "react";

import { render, screen } from "@testing-library/react";
import CardFaq from "./CardFaq";

test("Merender CardFaq component dengan konten dari props", () => {
  const imgSrc = "../assets/Images/program-donasi.png";
  const title = "Sample Title";
  const text = "Sample Text";

  render(<CardFaq img={imgSrc} title={title} text={text} />);
  const imgElement = screen.getByAltText("");
  expect(imgElement).toHaveAttribute("src", imgSrc);
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});
