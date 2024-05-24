import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { LoginPage2 } from "./LoginForm";

describe("Login panti", () => {
  test("Menampilkan pesan error jika email atau password salah", async () => {
    render(<LoginPage2 />);
    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "panti@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Masuk"));
    await waitFor(() => {
      expect(screen.getByText("Email atau password salah")).toBeInTheDocument();
    });
  });

  test("Menampilkan pesan berhasil login jika email dan password valid", async () => {
    render(<LoginPage2 />);
    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "panti@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "supersecure" },
    });
    fireEvent.click(screen.getByText("Masuk"));
    await waitFor(() => {
      expect(screen.getByText("Login berhasil")).toBeInTheDocument();
    });
  });
});
