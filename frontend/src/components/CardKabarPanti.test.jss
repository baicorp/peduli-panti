import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CardKabarPanti from "./CardKabarPanti";

test("Merender CardKabarPanti component dengan konten dari props", () => {
  const testData = {
    img: "path/to/image.jpg",
    judul: "Sample Title",
    deskripsi: "Sample Description",
    id: "123",
  };

  render(
    <Router>
      <CardKabarPanti {...testData} />
    </Router>
  );

  const imgElement = screen.getByAltText("");
  const judulElement = screen.getByText(testData.judul);
  const deskripsiElement = screen.getByText(testData.deskripsi);
  const linkElement = screen.getByText(/selengkapnya/i);

  expect(imgElement).toHaveAttribute("src", testData.img);
  expect(judulElement).toBeInTheDocument();
  expect(deskripsiElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", `/kabar-panti/${testData.id}`);
});
