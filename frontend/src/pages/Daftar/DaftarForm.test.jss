import React from "react";
import { render, screen } from "@testing-library/react";
import { FormField } from "./DaftarForm";

describe("FormField", () => {
  test("renders form fields", () => {
    const handleSubmit = jest.fn();
    const setNama = jest.fn();
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    const setKonfirmasiPassword = jest.fn();
    const nama = "";
    const email = "";
    const password = "";
    const konfirmasiPassword = "";

    render(
      <FormField
        handleSubmit={handleSubmit}
        setNama={setNama}
        setEmail={setEmail}
        setPassword={setPassword}
        setKonfirmasiPassword={setKonfirmasiPassword}
        nama={nama}
        email={email}
        password={password}
        konfirmasiPassword={konfirmasiPassword}
      />
    );

    // Assert that the nama input field is present
    const namaInput = screen.getByLabelText("Nama");
    expect(namaInput).toBeInTheDocument();

    // Assert that the email input field is present
    const emailInput = screen.getByLabelText("Email address");
    expect(emailInput).toBeInTheDocument();

    // Assert that the password input field is present
    const passwordInput = screen.getByLabelText("Kata Sandi");
    expect(passwordInput).toBeInTheDocument();

    // Assert that the konfirmasi password input field is present
    const konfirmasiPasswordInput = screen.getByLabelText(
      "Konfirmasi Kata Sandi"
    );
    expect(konfirmasiPasswordInput).toBeInTheDocument();

    // Assert that the submit button is present
    const submitButton = screen.getByText("Daftar");
    expect(submitButton).toBeInTheDocument();
  });
});
