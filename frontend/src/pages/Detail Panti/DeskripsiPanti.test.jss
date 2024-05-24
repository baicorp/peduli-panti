import React from "react";
import { render, screen } from "@testing-library/react";
import DeskripsiPanti from "./DeskripsiPanti";

test("Merender DeskripsiPanti component dengan konten dari props", () => {
  const namaPemilik = "Muhammad Amaludin";
  const kontak = "081234567890";
  const alamat = "Jl. Merdeka No. 12, Medan";
  const deskripsi =
    "Panti Asuhan ini didirikan pada tahun 2005 dan telah membantu banyak anak yatim piatu.";

  render(
    <DeskripsiPanti
      namaPemilik={namaPemilik}
      kontak={kontak}
      alamat={alamat}
      deskripsi={deskripsi}
    />
  );

  const namaPemilikElement = screen.getByText(namaPemilik);
  const kontakElement = screen.getByText(kontak);
  const alamatElement = screen.getByText(alamat);
  const deskripsiElement = screen.getByText(deskripsi);

  expect(namaPemilikElement).toBeInTheDocument();
  expect(kontakElement).toBeInTheDocument();
  expect(alamatElement).toBeInTheDocument();
  expect(deskripsiElement).toBeInTheDocument();
});
