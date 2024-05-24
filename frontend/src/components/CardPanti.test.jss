import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CardPanti from "./CardPanti";

test("Merender CardPanti component dengan konten dari props", () => {
  const testData = {
    id: "123",
    namaPanti: "Sample Panti",
    image: "sample-image.jpg",
    alamat: "Sample Address",
  };

  render(
    <Router>
      <CardPanti {...testData} />
    </Router>
  );

  const linkElement = screen.getByRole("link");
  const imgElement = screen.getByAltText("");
  const namaPantiElement = screen.getByText(testData.namaPanti);
  const alamatElement = screen.getByText(testData.alamat);

  expect(linkElement).toHaveAttribute("href", `/panti/${testData.id}`);
  expect(imgElement).toHaveAttribute(
    "src",
    `http://127.0.0.1:3000/images/profile/${testData.image}`
  );
  expect(namaPantiElement).toBeInTheDocument();
  expect(alamatElement).toBeInTheDocument();
});
