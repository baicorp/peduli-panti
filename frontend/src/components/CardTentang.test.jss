import React from "react";
import { render, screen } from "@testing-library/react";
import CardTentang from "./CardTentang";

test("renders CardTentang component dengan konten dari props", () => {
  const testData = {
    img: "path/to/image.jpg",
    text: "Sample Text",
  };

  render(<CardTentang {...testData} />);

  const imgElement = screen.getByAltText("logo-peduli");
  const textElement = screen.getByText(testData.text);

  expect(imgElement).toHaveAttribute("src", testData.img);
  expect(textElement).toBeInTheDocument();
});
